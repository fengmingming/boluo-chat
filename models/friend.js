import chat from "./chat"

export class Friend {
	
	constructor() {}
	
	static findAll(account) {
		return chat.get(`/Tenants/${chat.tenantId}/Accounts/${account}/Friends`)
	}
	
}