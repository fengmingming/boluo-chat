import chat from "./chat"

export class Login {
	
	constructor() {
		
	}
	
	static loginByAccount(account, password) {
		return chat.post(`/Tenants/${chat.tenantId}/Accounts/Login`, {account, password})
	}  
	
	static loginByCode(account, code) {
		
	}
	
}