<template>
	<view>
		<b-navbar title="消息"></b-navbar>
		<view class="body">
			<b-account></b-account>
			<up-gap height="2"></up-gap>
			<b-account></b-account>
			<up-gap height="2"></up-gap>
			<b-account></b-account>
			<up-gap height="2"></up-gap>
			<b-account></b-account>
			<up-gap height="2"></up-gap>
			<b-account></b-account>
			<up-gap height="2"></up-gap>
		</view>
		<b-tabbar></b-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			
		}
	}
</script>

<style>
.body {
	margin-top: 90rpx;
	margin-bottom: 120rpx;
	background-color: #fafafa;
}
</style>
