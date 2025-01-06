<template>
	<view class="container">
		<up-navbar :autoBack="true" :border="true"></up-navbar>
		<uni-card title="密码登录">
			<up-form :model="loginParam">
				<up-form-item label="手机号:" label-width="120rpx">
					<up-input type="number" placeholder="请输入手机号" v-model="loginParam.account" maxlength="11"></up-input>
				</up-form-item>
				<up-form-item label="密码:" label-width="120rpx">
					<up-input type="password" placeholder="请输入密码" v-model="loginParam.password" maxlength="20"></up-input>
				</up-form-item>
				<up-form-item>
					<radio :checked="loginParam.checked"/> 
					<up-link text="boluo-chat 加入协议" href="/#/pages/login/protocol"></up-link>
				</up-form-item>
				<up-form-item>
					<up-button text="登录" type="primary" @tap="submit"></up-button>
				</up-form-item>
			</up-form>
		</uni-card>
	</view>
</template>

<script>
import chat from '../../models/chat'
import { Login } from '../../models/login'
export default {
	data() {
		return {
			loginParam: {
				account:'',
				password:'',
				checked: false
			}
		}
	},
	methods: {
		toProtocol: function() {
			this.loginParam.checked = true
			uni.navigateTo({
				url: '/pages/login/protocol'
			})
		},
		submit() {
			let promise = Login.loginByAccount(this.loginParam.account, this.loginParam.password)
			chat.handleResponsePromise(promise, res => {
				chat.setAccount(this.loginParam.account)
				chat.setAuthorization(res.token)
				uni.reLaunch({
					url: '/pages/message/message'
				})
			})
		}
	}
}
</script>

<style scoped>
.container {
	display: flex;
	justify-content: center; /* 水平居中 */
	align-items: center;     /* 垂直居中 */
	height: 80vh;           /* 确保父容器有高度，例如全屏高度 */
}
.login-container {
	
}
</style>
