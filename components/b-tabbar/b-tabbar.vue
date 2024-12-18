<template>
	<view>
		<up-tabbar
			:value="value"
			@change="change"
			:fixed="true"
			:placeholder="false"
			:safeAreaInsetBottom="false">
			<up-tabbar-item text="消息" icon="chat" name="message"></up-tabbar-item>
			<up-tabbar-item text="通讯录" icon="list-dot" name="book"></up-tabbar-item>
			<up-tabbar-item text="发现" icon="eye" name="find"></up-tabbar-item>
			<up-tabbar-item text="我" icon="account" name="me"></up-tabbar-item>
		</up-tabbar>
	</view>
</template>

<script>
	export default {
		name:"b-tabbar",
		data() {
			return {
				value: 'message'
			};
		},
		mounted() {
			const query = this.$route.query;
			this.value = query.name || 'message'
		},
		methods: {
			change(e) {
				switch(e) {
					case 'message':
						uni.reLaunch({
							url: '/pages/message/message?name=message'
						})
						break;
					case 'book':
						uni.reLaunch({
							url: '/pages/book/book?name=book'
						})
						break;
					case 'find':
						uni.reLaunch({
							url: '/pages/find/find?name=find'
						})
						break;
					case 'me':
						uni.reLaunch({
							url: '/pages/me/me?name=me'
						})
						break;
				}
			}
		}
	}
</script>

<style>

</style>