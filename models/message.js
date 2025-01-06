import chat from './chat.js'

function buildBaseMessage() {
	return {
		tenantId: chat.getTenantId(),
		from: chat.getAccount()
	}
}

export class Messsage {
	
	constructor() {}
	
	static buildTextMessage(to, content) {
		let message = buildBaseMessage()
		message.to = to
		message.msgType = 'text'
		message.content = content
		return message
	}
	
}