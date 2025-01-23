import chat from "./chat"
import { Account } from "./account"

export class Friend {
	
	constructor() {}
	
	static findAll() {
		return chat.cacheWraper(chat.get(`/Tenants/${chat.getTenantId()}/Accounts/${chat.getAccount()}/Friends`), 'Find.findAll')
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
					resolve({statusCode: 200, data: {code: 404, codeDesc: `${account}不在好友列表中`, data: map[account]}})
				}
			})
		})
	}
	
	static clear() {
		uni.clearStorageSync('Friend.findAll')
	}
	
}