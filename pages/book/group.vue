<template>
	<view>
		<up-navbar title="群聊" :autoBack="true" bgColor="#fafafa" :border="false" right-icon="search" @right-click="showSearchPop = true">
		</up-navbar>
		<up-popup v-model:show="showSearchPop" mode="top">
			<view style="padding: 5px;background-color: #fafafa;">
				<up-search :show-action="true" actionText="搜索"></up-search>
			</view>
		</up-popup>
		<view class="body">
			Group
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			showSearchPop: false
		}
	},
	methods: {
		
	}
}
</script>

<style>
.body {
	margin-top: 86rpx;
	margin-bottom: 130rpx;
}
</style>
