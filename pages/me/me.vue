<template>
	<view>
		<view>
			<up-gap height="30"></up-gap>
			<uni-list :border="false">
				<uni-list-item title="helloworld" note="微信号:" thumb-size="lg"
				thumb="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png">
					<template v-slot:footer>
						<up-icon name="grid" size="20px"></up-icon>
					</template>
				</uni-list-item>
			</uni-list>
			<up-gap height="30"></up-gap>
		</view>
		<view style="background-color: #fafafa;">
			<up-gap height="5"></up-gap>
			<uni-list>
				<uni-list-item title="列表左侧带略缩图" note="" thumb-size="base"
				thumb="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png">
					<template v-slot:footer>
						<up-icon name="arrow-right"></up-icon>
					</template>
				</uni-list-item>
			</uni-list>
			<up-gap height="5"></up-gap>
			<uni-list>
				<uni-list-item title="列表左侧带略缩图" note="" thumb-size="base"
				thumb="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png">
					<template v-slot:footer>
						<up-icon name="arrow-right"></up-icon>
					</template>
				</uni-list-item>
			</uni-list>
			<up-gap height="5"></up-gap>
			<uni-list>
				<uni-list-item title="列表左侧带略缩图" note="" thumb-size="base"
				thumb="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png">
					<template v-slot:footer>
						<up-icon name="arrow-right"></up-icon>
					</template>
				</uni-list-item>
				<uni-list-item title="列表左侧带略缩图" note="" thumb-size="base"
				thumb="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png">
					<template v-slot:footer>
						<up-icon name="arrow-right"></up-icon>
					</template>
				</uni-list-item>
				<uni-list-item title="列表左侧带略缩图" note="" thumb-size="base"
				thumb="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png">
					<template v-slot:footer>
						<up-icon name="arrow-right"></up-icon>
					</template>
				</uni-list-item>
			</uni-list>
			<up-button text="退出" @tap="logout"></up-button>
		</view>
		<b-tabbar></b-tabbar>
	</view>
</template>

<script>
import chat from '../../models/chat';
export default {
	data() {
		return {
			
		}
	},
	methods: {
		logout: function() {
			chat.logout()
		}
	}
}
</script>

<style>

</style>
