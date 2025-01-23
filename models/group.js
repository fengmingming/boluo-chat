import chat from "./chat"

export class Group {
	
	constructor(){}
	
	static findAll() {
		return chat.cacheWraper(chat.get(`/Tenants/${chat.getTenantId()}/Accounts/${chat.getAccount()}/Groups`), 'Group.findAll')
	}
	
	static findByGroupId(groupId) {
		if(groupId.indexOf('GROUP:') == 0) {
			groupId = groupId.substr(6)
		}
		return chat.cacheWraper(chat.get(`/Tenants/${chat.getTenantId()}/Groups/${groupId}`), `Group.findByGroupId(${groupId})`)
	}
	
	static clear() {
		uni.clearStorageSync('Group.findAll')
	}
	
	static findMembers(groupId) {
		if(groupId.indexOf('GROUP:') == 0) {
			groupId = groupId.substr(6)
		}
		return chat.cacheWraper(chat.get(`/Tenants/${chat.getTenantId()}/Groups/${groupId}/Members`), `Group.findMembers(${groupId})`)
	}
	
}