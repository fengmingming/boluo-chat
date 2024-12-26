<template>
	<view>
		<up-navbar :autoBack="true" right-icon="more-dot-fill"></up-navbar>
		<view class="body">
			
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			account: null
		}
	},
	onLoad(option) {
		this.account = option.account
	},
	methods: {
		
	}
}
</script>
.body {
	margin-top: 88px;
}
<style>

</style>
