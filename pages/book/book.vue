<template>
	<view>
		<b-navbar title="通讯录"></b-navbar>
		<view class="body">
			<up-index-list :index-list="indexList" :customNavHeight="45">
				<template #header>
					<uni-list :border="true">
						<uni-list-item title="新的朋友" thumb="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png" 
							thumb-size="lg" to="/pages/book/friend"></uni-list-item>
						<uni-list-item title="群聊" thumb="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
						 	thumb-size="lg" to="/pages/book/group"></uni-list-item>
					</uni-list>
				</template>
				<template v-for="(item, index) in itemArr">
					<!-- #ifdef APP-NVUE -->
					<up-index-anchor :text="indexList[index]"></up-index-anchor>
					<!-- #endif -->
					<up-index-item>
						<!-- #ifndef APP-NVUE -->
						<up-index-anchor :text="indexList[index]"></up-index-anchor>
						<!-- #endif -->
						<uni-list :border="true">
							<view v-for="(cell, index) in item">
								<uni-list-item :title="cell.nickName" thumb="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
								 	 thumb-size="lg" to="/pages/book/friend_detail?account=cell.account"></uni-list-item>
							</view>
						</uni-list>
					</up-index-item>
				</template>
				<template #footer>
					<view style="display: flex;align-items: center;justify-content: center;padding: 25rpx;">
						<text>{{total}}个朋友</text>
					</view>
				</template>
			</up-index-list>
		</view>
		<b-tabbar></b-tabbar>
	</view>
</template>

<script>
import chat from '../../models/chat.js'
import {Friend} from '../../models/friend.js'
	
export default {
	data() {
		return {
			indexList: [''],
			itemArr: [],
			total: 0
		}
	},
	mounted() {
		let promise = Friend.findAll();
		chat.handleResponsePromise(promise, datas => {
			if(datas) {
				let map = datas.reduce((map, data) => {
					let key = data.firstLetter
					if(!map[key]) {
						map[key] = []
					}
					map[key].push(data)
					return map
				}, {})
				let keys = Object.keys(map).sort((a,b) => {
					if(a < b) return -1
					if(a == b) return 0
					else return 1
				})
				//#号放最后
				if(keys.length > 0 && keys[0] == '#') {
					keys.shift()
					keys.push('#')
				}
				this.indexList = keys
				this.itemArr = keys.map(key => map[key])
				this.total = datas.length
			}
		})
	},
	methods: {
		
	}
}
</script>

<style scoped>
.body {
	margin-top: 86rpx;
	margin-bottom: 130rpx;
}
</style>
