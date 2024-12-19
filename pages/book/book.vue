<template>
	<view>
		<b-navbar title="通讯录"></b-navbar>
		<view class="body">
			<up-index-list :index-list="indexList" :customNavHeight="45">
				<template #header>
					<uni-list :border="true">
						<uni-list-item title="列表左侧带略缩图" note="列表描述信息" thumb="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
						 	 thumb-size="lg"></uni-list-item>
						 <uni-list-item title="列表左侧带略缩图" note="列表描述信息" thumb="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
							 thumb-size="lg"></uni-list-item>
						<uni-list-item title="列表左侧带略缩图" note="列表描述信息" thumb="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
						 	 thumb-size="lg"></uni-list-item>
						<uni-list-item title="列表左侧带略缩图" note="列表描述信息" thumb="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
						 	 thumb-size="lg"></uni-list-item>
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
								<uni-list-item :title="cell" note="index" thumb="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
								 	 thumb-size="lg"></uni-list-item>
							</view>
						</uni-list>
					</up-index-item>
				</template>
				<template #footer>
					<view style="display: flex;align-items: center;justify-content: center;padding: 25rpx;">
						<text>1000个朋友</text>
					</view>
				</template>
			</up-index-list>
		</view>
		<b-tabbar></b-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				indexList: ["A", "B", "C","D", "E", "F","G", "H", "I","J", "K", "L"],
				itemArr: [
					['列表A1','列表A2','列表A3','列表A1','列表A2','列表A3','列表A1','列表A2','列表A3'],
					['列表B1','列表B2','列表B3','列表A1','列表A2','列表A3','列表A1','列表A2','列表A3'],
					['列表C1','列表C2','列表C3'],
					['列表A1','列表A2','列表A3'],
					['列表B1','列表B2','列表B3'],
					['列表C1','列表C2','列表C3'],
					['列表A1','列表A2','列表A3'],
					['列表B1','列表B2','列表B3'],
					['列表C1','列表C2','列表C3'],
					['列表A1','列表A2','列表A3'],
					['列表B1','列表B2','列表B3'],
					['列表C1','列表C2','列表C3'],
				]
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
