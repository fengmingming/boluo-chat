<template>
	<view class="container">
		<up-navbar :autoBack="true" :border="true"></up-navbar>
		<uni-card title="手机号注册">
			<up-form :model="loginParam">
				<up-form-item label="手机号:" label-width="120rpx">
					<up-input type="number" placeholder="请输入手机号" :value="loginParam.account" maxlength="11"></up-input>
				</up-form-item>
				<up-form-item label="密码:" label-width="120rpx">
					<up-input type="password" placeholder="请输入密码" :value="loginParam.password" maxlength="20"></up-input>
				</up-form-item>
				<up-form-item>
					<radio :checked="loginParam.checked"/> 
					<up-link text="boluo-chat 加入协议" href="/#/pages/login/protocol"></up-link>
				</up-form-item>
				<up-form-item>
					<up-button text="注册" type="primary"></up-button>
				</up-form-item>
			</up-form>
		</uni-card>
	</view>
</template>

<script>
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
