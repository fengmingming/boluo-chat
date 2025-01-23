import chat from './chat.js'

export class Account {
	
	constructor(){}
	
	static findByAccount(account) {
		let key = `Account.findByAccount[${account}]`
		return chat.cacheWraper(chat.get(`/Tenants/${chat.getTenantId()}/Accounts/${account}`), key)
	}
	
}