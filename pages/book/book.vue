<template>
	<view>
		<up-navbar title="通讯录" :border="false" leftIcon="" bgColor="#fafafa">
			<template #right>
				<view class="u-nav-slot">
					<up-icon name="search" size="20" ></up-icon>
					<up-line direction="column" :hairline="false" length="25" margin="0 10rpx"></up-line>
					<up-icon name="plus" size="20"></up-icon>
				</view>
		  </template>
		</up-navbar>
		<view class="body">
			<up-index-list :indexList="indexList">
				<template #header>
					<view class="list">
						<view class="list__item" @click="goNext">
							<up-avatar shape="square" size="35" icon="man-add-fill" fontSize="26" randomBgColor></up-avatar>
							<text class="list__item__user-name">新的朋友</text>
						</view>
						<up-line></up-line>
						<view class="list__item">
							<up-avatar shape="square" size="35" icon="tags-fill" fontSize="26" randomBgColor></up-avatar>
							<text class="list__item__user-name">标签</text>
						</view>
						<up-line></up-line>
						<view class="list__item">
							<up-avatar shape="square" size="35" icon="chrome-circle-fill" fontSize="26" randomBgColor></up-avatar>
							<text class="list__item__user-name">朋友圈</text>
						</view>
						<up-line></up-line>
						<view class="list__item">
							<up-avatar shape="square" size="35" icon="qq-fill" fontSize="26" randomBgColor></up-avatar>
							<text class="list__item__user-name">QQ</text>
						</view>
						<up-line></up-line>
					</view>
				</template>
				<template :key="index" v-for="(item, index) in itemArr">
					<!-- #ifdef APP-NVUE -->
					<up-index-anchor :text="indexList[index]"></up-index-anchor>
					<!-- #endif -->
					<up-index-item>
						<!-- #ifndef APP-NVUE -->
						<up-index-anchor :text="indexList[index]"></up-index-anchor>
						<!-- #endif -->
						<view class="list" v-for="(item1, index1) in item" :key="index1">
							<view class="list__item">
								<image class="list__item__avatar" :src="item1.url"></image>
								<text class="list__item__user-name">{{item1.name}}</text>
							</view>
							<up-line></up-line>
						</view>
					</up-index-item>
				</template>
				<template #footer>
					<view style="text-align: center;padding-top: 30rpx">
						<text class="list__footer">共305位好友</text>
					</view>
				</template>
			</up-index-list>
		</view>
		<b-tabbar></b-tabbar>
	</view>
</template>

<script>
	const indexList = () => {
		const indexList = []
		const charCodeOfA = 'A'.charCodeAt(0)
		indexList.push("↑")
		indexList.push("☆")
		for (let i = 0; i < 16; i++) {
			indexList.push(String.fromCharCode(charCodeOfA + i))
		}
		indexList.push('#')
		return indexList
	}
	export default {
		data() {
			return {
				indexList: indexList()
			}
		},
		computed: {
			itemArr() {
				return this.indexList.map(item => {
					const arr = []
					for (let i = 0; i < 10; i++) {
						arr.push({
							name: 'A' + i,
							url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png'
						})
					}
					return arr
				})
			}
		},
		methods: {
			goNext() {
				uni.navigateTo({
					url: 'indexList2'
				})
			}
		}
	}
</script>

<style lang="scss">
.u-nav-slot {
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-width: 0.5px;
	border-radius: 100px;
	border-color: $u-border-color;
	padding: 3px 7px;
	opacity: 0.8;
}
.body {
	margin-top: 90rpx;
	margin-bottom: 130rpx;
}
.list {
	&__item {
		@include flex;
		padding: 6px 12px;
		align-items: center;
		
		&__avatar {
			height: 35px;
			width: 35px;
			border-radius: 3px;
		}
		
		&__user-name {
			font-size: 16px;
			margin-left: 10px;
			color: $u-main-color;
		}
	}
	
	&__footer {
		color: $u-tips-color;
		font-size: 14px;
		text-align: center;
		margin: 15px 0;
	}
}
</style>
