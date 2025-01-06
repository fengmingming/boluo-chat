<template>
	<view class="mc-item">
		<up-image :src="account.profilePicture || 'https://img.36krcdn.com/20200406/v2_d2c6a686b4074a1eb43603e67d6ba204_img_png'" 
			width="30px" height="30px" radius="2"></up-image>
		<view v-if="message.msgType == 'text'" class="text">
			<up-text :text="message.content"></up-text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"b-left-mc",
		props: ['account', 'message'],
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
.mc-item {
	display: flex;
	justify-content: flex-start;
}
.text {
	max-width: 80%;
    padding: 10px;
    border-radius: 10px;
    margin: 5px;
    font-size: 14px;
    line-height: 1.5;
	background-color: #fafafa;
	align-self: flex-start;
	border-bottom-left-radius: 2px;
}
</style>