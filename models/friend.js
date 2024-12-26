import chat from "./chat"

export class Friend {
	
	constructor() {}
	
	static findAll() {
		return chat.get(`/Tenants/${chat.getTenantId()}/Accounts/${chat.getAccount()}/Friends`)
	}
	
}