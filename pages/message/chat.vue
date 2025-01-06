<template>
	<view>
		<up-navbar :autoBack="true" right-icon="more-dot-fill" :title="title" bg-color="#fafafa"></up-navbar>
		<view class="body">
			<view v-for="(message, index) in messages">
				<b-right-mc :message="message" :account="account"></b-right-mc>
			</view>
		</view>
		<view class="foot">
			<b-input @messageHandle="messageHandle"></b-input>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: '聊天',
			messages: [],
			account: {}
		}
	},
	methods: {
		messageHandle(message) {
			console.log(message)
			this.messages.push(message)
		}
	}
}
</script>

<style>
.body {
	margin-top: 68px;
	padding: 0 10px 0 10px
}
.foot {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	background-color: #fafafa;
}
</style>
