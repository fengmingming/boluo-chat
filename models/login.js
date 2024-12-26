import chat from "./chat"

export class Login {
	
	constructor() {
		
	}
	
	static loginByAccount(account, password) {
		return chat.post(`/Tenants/${chat.getTenantId()}/Accounts/Login`, {account, password})
	}  
	
	static loginByCode(account, code) {
		
	}
	
}