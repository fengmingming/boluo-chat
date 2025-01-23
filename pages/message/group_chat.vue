<template>
	<view>
		<up-navbar :autoBack="true" right-icon="more-dot-fill" :title="title" bg-color="#fafafa"></up-navbar>
		<view>
			<up-gap height="60"></up-gap>
			<view v-for="(message, index) in messages">
				<b-left-mc :message="message" :account="findAccount(message.from)" v-if="message.from != me.account"></b-left-mc>
				<b-right-mc :message="message" :account="me" v-if="message.from == me.account"></b-right-mc>
			</view>
			<up-gap height="160"></up-gap>
		</view>
		<view class="foot" id="bottom_position">
			<b-input @messageHandle="messageHandle" :to="`GROUP:${this.group.groupId}`"></b-input>
		</view>
	</view>
</template>

<script>
import chat from '../../models/chat'
import {Group} from '../../models/group'
import { Account } from '../../models/account'
import { Message, subscribe, unSubscribe} from '../../models/message'
export default {
	data() {
		return {
			title: '聊天',
			messages: [],
			group: {},
			me: {},
			members: {}
		}
	},
	onLoad(options) {
		chat.handleResponsePromise(Group.findByGroupId(options.groupId), data => {
			this.group = data
			this.title = this.group.groupName || ''
			chat.handleResponsePromise(Group.findMembers(data.groupId), datas => {
				for(data of datas) {
					this.members[data.account] = data
				}
				Message.getMessages("GROUP:" + this.group.groupId).then(queue => {
					this.messages = queue
					uni.pageScrollTo({selector: '#bottom_position'})
					subscribe("GROUP:" + this.group.groupId, (message) => {
						this.messages.push(message)
						uni.pageScrollTo({selector: '#bottom_position'})
					})
				})
			})
		})
		chat.handleResponsePromise(Account.findByAccount(chat.getAccount()), data => {
			this.me = data
		})
	},
	onShow() {
		uni.pageScrollTo({selector: '#bottom_position'})
	},
	onUnload() {
		unSubscribe("GROUP:" + this.group.groupId)
	},
	methods: {
		messageHandle(message) {
			chat.handleResponsePromise(Message.sendMessage(message), data => {
			})
		},
		findAccount(account) {
			return this.members[account]
		}
	}
}
</script>

<style scoped>
.foot {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	background-color: #fafafa;
}
</style>
