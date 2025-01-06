<template>
	<view class="container">
		<up-navbar :autoBack="true" :border="true"></up-navbar>
		<up-toast ref="toastRef"></up-toast>
		<uni-card title="验证码登录">
			<up-form :model="loginParam">
				<up-form-item label="手机号:" label-width="120rpx">
					<up-input type="number" placeholder="请输入手机号" :value="loginParam.account" maxlength="11"></up-input>
				</up-form-item>
				<up-form-item label="验证码:" label-width="120rpx">
					<up-input type="number" :value="loginParam.code" maxlength="4"></up-input>
					<view style="margin-left: 10rpx;">
						<up-code ref="uCode" @change="codeChange" :seconds="seconds" change-text="XS"
							@start="disabled = true" @end="disabled = false" ></up-code>
						<up-button @tap="getCode" :text="tips" type="info" :disabled="disabled"></up-button>
					</view>
				</up-form-item>
				<up-form-item>
					<radio :checked="loginParam.checked"/> 
					<up-link text="boluo-chat 加入协议" @click="toProtocol"></up-link>
				</up-form-item>
				<up-form-item>
					<up-button text="登录" type="primary"></up-button>
				</up-form-item>
			</up-form>
		</uni-card>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tips: '',
				seconds: 60,
				disabled: false,
				loginParam: {
					account:'',
					code:'',
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
			codeChange(text) {
				this.tips = text;
			},
			getCode() {
				if(this.$refs.uCode.canGetCode) {
					// 模拟向后端请求验证码
					uni.showLoading({
						title: '正在获取验证码'
					})
					setTimeout(() => {
						uni.hideLoading();
						// 这里此提示会被this.start()方法中的提示覆盖
						this.$refs.toastRef.show({message: '验证码已发送'});
						// 通知验证码组件内部开始倒计时
						this.$refs.uCode.start();
					}, 2000);
				} else {
					this.$refs.toastRef.show({message: '倒计时结束后再发送'});
				}
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
