<template>
	<view>
		<up-navbar :autoBack="true" right-icon="more-dot-fill"></up-navbar>
		<view class="body">
			<uni-list :border="false">
				<uni-list-item :title="`昵称:${title}`" :note="`微信号:${account}`" thumb-size="lg"
					thumb="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png">
				</uni-list-item>
			</uni-list>
			<up-gap height="10"></up-gap>
			<uni-list>
				<uni-list-item title="设置备注和标签" link></uni-list-item>
				<uni-list-item title="朋友权限" link></uni-list-item>
			</uni-list>
			<up-gap height="3" bgColor="#fafafa"></up-gap>
			<uni-list>
				<uni-list-item title="朋友圈" link></uni-list-item>
				<uni-list-item title="更多信息" link></uni-list-item>
			</uni-list>
			<up-gap height="3" bgColor="#fafafa"></up-gap>
			<up-button text="发消息" @tap="toChat"></up-button>
			<up-button text="音视频通话" :customStyle="{borderTop: 0}"></up-button>
		</view>
	</view>
</template>

<script>
import chat from '../../models/chat'
import { Friend } from '../../models/friend'
export default {
	data() {
		return {
			title: '',
			account: ''
		}
	},
	onLoad(option) {
		this.account = option.account
		chat.handleResponsePromise(Friend.findByAccount(option.account), account => {
			this.title = account.nickName
		})
	},
	methods: {
		toChat() {
			uni.navigateTo({
				url: '/pages/message/chat?account=' + this.account
			})
		}
	}
}
</script>

<style scoped>
.body {
	margin-top: 49px;
}
</style>
