<template>
	<view>
		<up-navbar title="群聊" :autoBack="true" bgColor="#fafafa" :border="false" right-icon="search" @right-click="showSearchPop = true">
		</up-navbar>
		<up-popup v-model:show="showSearchPop" mode="top">
			<view style="padding: 5px;background-color: #fafafa;">
				<up-search :show-action="true" actionText="搜索" bgColor="#ffffff" 
					@custom="filterF" @search="filterF" @clear="clearF"></up-search>
			</view>
		</up-popup>
		<view class="body">
			<uni-list>
				<view v-for="(group, index) in groups">
					<uni-list-item :title="group.groupName" thumb="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png" 
						thumb-size="lg"></uni-list-item>
				</view>
			</uni-list>
		</view>
	</view>
</template>

<script>
import {Group} from '../../models/group.js'
import chat from '../../models/chat.js'
export default {
	data() {
		return {
			showSearchPop: false,
			groups:[],
			cachedGroups:[]
		}
	},
	mounted() {
		let promise = Group.findAll()
		chat.handleResponsePromise(promise, data => {
			this.groups = data
			this.cachedGroups = data
		})
	},
	methods: {
		filterF: function(value) {
			if(value) {
				value = value.split('').reduce((result, v) => result = result + v + '|', '')
				value = value.substring(0, value.length - 1)
				let regexp = new RegExp(value)
				this.groups = this.cachedGroups.filter(group => group.groupName.search(regexp) >= 0)
			}else {
				this.groups = this.cachedGroups
			}
		},
		clearF: function() {
			this.groups = this.cachedGroups
		}
	}
}
</script>

<style scoped>
.body {
	margin-top: 86rpx;
	margin-bottom: 130rpx;
}
</style>
