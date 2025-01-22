import chat from './chat.js'

function buildBaseMessage() {
	return {
		tenantId: chat.getTenantId(),
		from: chat.getAccount()
	}
}

var messageQueueMap = uni.getStorageSync('__messageQueueMap')
var messageConsumers = {}

if(!messageQueueMap) {
	messageQueueMap = {}
}

function findQueuekey(message) {
	let key
	if(message.group) {
		key = message.to
	}else {
		if(chat.getAccount() == message.from) {
			key = message.to
		}else {
			key = message.from
		}
	}
	return key
}

function storeMessage(message) {
	let key = findQueuekey(message)
	let consumer = messageConsumers[key]
	if(consumer) {
		consumer(message)
	}else {
		let map = messageQueueMap
		let queue = map[key]
		if(!queue) {
			queue = []
			map[key] = queue
		}
		queue.push(message)
	}
	uni.setStorageSync('__messageQueueMap', messageQueueMap)
}

function _getMessages(account) {
	let map = messageQueueMap
	let queue = map[account]
	if(!queue) {
		queue = []
		map[account] = queue
	}
	let maxMsgId = ''
	if(queue.length > 0) {
		maxMsgId = queue[queue.length - 1].msgId
	}
	return new Promise((resolve, reject) => {
		let index = account.indexOf('GROUP:')
		if(index == 0) {
			chat.handleResponsePromise(chat.get(`/Tenants/${chat.getTenantId()}/Groups/${account.substr(6)}/Messages?maxMsgId=${maxMsgId}`), data => {
				data.forEach(message => {
					storeMessage(message)
				})
				if(data.length > 0) {
					_getMessages(account)
				}else {
					resolve(queue)
				}
			})
		}else {
			chat.handleResponsePromise(chat.get(`/Tenants/${chat.getTenantId()}/Accounts/${chat.getAccount()}/Messages?account=${account}&maxMsgId=${maxMsgId}`), data => {
				data.forEach(message => {
					storeMessage(message)
				})
				if(data.length > 0) {
					_getMessages(account)
				}else {
					resolve(queue)
				}
			})
		}
	})
}

var connected = false
let messageSocketTask = uni.connectSocket({
	url: chat.wsUrl + `?tenantId=${chat.getTenantId()}&account=${chat.getAccount()}&token=${chat.getAuthorization()}`,
	complete: ()=> {
		connected = true
	}
});

messageSocketTask.onClose(re => {
	console.log('socket close', re)
})

messageSocketTask.onError(re => {
	console.log('socket error', re)
})

messageSocketTask.onOpen(re => {
	console.log('socket start', re)
})

messageSocketTask.onMessage(re => {
	if(re.data == 'PONG') {
		console.log('message pong')
		return
	}
	let message = JSON.parse(re.data)
	console.log('message', message)
	storeMessage(message)
})

export function subscribe(key, consumer) {
	messageConsumers[key] = consumer
}

export function unSubscribe(key) {
	messageConsumers[key] = null
}

export function ping() {
	if(connected) {
		messageSocketTask.send({data: 'PING'})
	}
}

export function closeMessageSocket() {
	if(connected) {
		messageSocketTask.close()
	}
}

export class Message {
	
	constructor() {}
	
	static buildTextMessage(to, content) {
		let message = buildBaseMessage()
		message.to = to
		message.msgType = 'text'
		message.content = content
		return message
	}
	
	static sendMessage(message) {
		let tenantId = chat.getTenantId()
		return chat.post(`/Tenants/${tenantId}/Messages`, message)
	}
	
	static getMessages(account) {
		return _getMessages(account)
	}
	
	static getLastMessages() {
		let accounts = Object.keys(messageQueueMap)
		if(accounts) {
			accounts = accounts.filter(account => messageQueueMap[account]).map(account => {
				let queue = messageQueueMap[account]
				return {
					account: account,
					message: queue[queue.length - 1]
				}
			})
		}
		return accounts
	}
	
}
