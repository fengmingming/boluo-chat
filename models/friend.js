import chat from "./chat"

export class Friend {
	
	constructor() {}
	
	static findAll() {
		let accounts = uni.getStorageSync('Friend.findAll')
		if(accounts) {
			return new Promise((resolve, reject) => {
				resolve(accounts)
			})
		}else {
			return new Promise((resolve, reject) => {
				chat.get(`/Tenants/${chat.getTenantId()}/Accounts/${chat.getAccount()}/Friends`).then(data => {
					uni.setStorageSync('Friend.findAll', data)
					resolve(data)
				}).catch(e => reject(e))
			})
		}
	}
	
	static findByAccount(account) {
		return new Promise((resolve, reject) => {
			chat.handleResponsePromise(Friend.findAll(), (data) => {
				let map = data.reduce((result, value) => {
					result[value.account] = value
					return result
				}, {})
				if(map[account]) {
					resolve({statusCode: 200, data: {code: 0, data: map[account]}})
				}else {
					resolve(chat.get(`/Tenants/${chat.getTenantId()}/Accounts/${account}`))
				}
			})
		})
	}
	
	static clear() {
		uni.clearStorageSync('Friend.findAll')
	}
	
}