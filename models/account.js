import chat from './chat.js'

export class Account {
	
	constructor(){}
	
	static findByAccount(account) {
		return chat.get(`/Tenants/${chat.getTenantId()}/Accounts/${account}`)
	}
	
}