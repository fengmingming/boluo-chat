<template>
	<view>
		<b-navbar title="消息"></b-navbar>
		<view class="body">
			<uni-list>
				<view v-for="(account, index) in accounts">
					<uni-list-chat :title="account.account.nickName" avatar="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png" 
						:note="lastMessageText(account.message)" :time="formatTimestamp(account.message.timestamp)"
						:to="`/pages/message/chat?account=${account.account.account}`"></uni-list-chat>
				</view>
			</uni-list>
		</view>
		<b-tabbar></b-tabbar>
	</view>
</template>

<script>
	import chat from '../../models/chat'
	import { Friend } from '../../models/friend'
	import { Message } from '../../models/message'
	import { formatTimestamp } from '../../models/util'
	export default {
		data() {
			return {
				accounts: []
			}
		},
		onLoad() {
			this.loadAccounts()
		},
		methods: {
			loadAccounts() {
				let accounts = Message.getLastMessages()
				accounts.forEach(account => {
					chat.handleResponsePromise(Friend.findByAccount(account.account), data => {
						if(data) {
							this.accounts.push({account: data, message: account.message})
							this.accounts.sort((a,b) => {
								return b.message.timestamp - a.message.timestamp
							})
						}
					})
				})
			},
			lastMessageText(message) {
				return '[您有新的消息]'
			},
			formatTimestamp,
		}
	}
</script>

<style scoped>
.body {
	margin-top: 88rpx;
	margin-bottom: 100rpx;
	background-color: #fafafa;
}
</style>
