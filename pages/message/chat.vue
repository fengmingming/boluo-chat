<template>
	<view>
		<up-navbar :autoBack="true" right-icon="more-dot-fill" :title="title" bg-color="#fafafa"></up-navbar>
		<view>
			<up-gap height="60"></up-gap>
			<view v-for="(message, index) in messages">
				<b-left-mc :message="message" :account="me" v-if="message.from != me.account"></b-left-mc>
				<b-right-mc :message="message" :account="account" v-if="message.from == me.account"></b-right-mc>
			</view>
			<up-gap height="160"></up-gap>
		</view>
		<view class="foot" id="bottom_position">
			<b-input @messageHandle="messageHandle" :to="account.account"></b-input>
		</view>
	</view>
</template>

<script>
import chat from '../../models/chat'
import { Friend } from '../../models/friend'
import { Message, subscribe, unSubscribe} from '../../models/message'
export default {
	data() {
		return {
			title: '聊天',
			messages: [],
			account: {},
			me: {},
		}
	},
	onLoad(options) {
		chat.handleResponsePromise(Friend.findByAccount(options.account), data => {
			this.account = data
			this.title = this.account.nickName || ''
			Message.getMessages(this.account.account).then(queue => {
				this.messages = queue
				uni.pageScrollTo({selector: '#bottom_position'})
				subscribe(this.account.account, (message) => {
					this.messages.push(message)
					uni.pageScrollTo({selector: '#bottom_position'})
				})
			})
		})
		chat.handleResponsePromise(Friend.findByAccount(chat.getAccount()), data => {
			this.me = data
		})
	},
	onShow() {
		uni.pageScrollTo({selector: '#bottom_position'})
	},
	onUnload() {
		unSubscribe(this.account.account)
	},
	methods: {
		messageHandle(message) {
			chat.handleResponsePromise(Message.sendMessage(message), data => {
			})
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
