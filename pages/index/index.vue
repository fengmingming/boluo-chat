<template>
	<view class="content">
		<image class="logo" src="/static/chats.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<view style="width: 100%; margin-top: 50rpx">
			<up-row justify="space-between" gutter="10" >
				<up-col span="3"></up-col>
				<up-col span="3">
					<up-button text="登录" type="primary" custom-style="max-width:200px" @click="toLogin"></up-button>
				</up-col>
				<up-col span="3">
					<up-button text="注册" type="info" custom-style="max-width:200px" @click="toRegister"></up-button>
				</up-col>
				<up-col span="3"></up-col>
			</up-row>
		</view>
	</view>
</template>

<script>
import chat from '../../models/chat'
export default {
	data() {
		return {
			title: 'boluo-chat'
		}
	},
	mounted() {
		if(chat.getAccount()) {
			uni.reLaunch({
				url: '/pages/message/message'
			})
		}
	},
	methods: {
		toLogin(){
			uni.navigateTo({
				url: '/pages/login/login'
			})
		},
		toRegister(){
			uni.navigateTo({
				url: '/pages/login/register'
			})
		},
	}
}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
