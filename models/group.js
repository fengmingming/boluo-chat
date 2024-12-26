import chat from "./chat";
export class Group {
	constructor(){}
	
	static findAll() {
		return chat.get(`/Tenants/${chat.getTenantId()}/Accounts/${chat.getAccount()}/Groups`)
	}
	
}