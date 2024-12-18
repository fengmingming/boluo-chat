<template>
	<view>
		<uni-list :border="false">
			<uni-list-chat title="uni-app" :avatar="avatar" note="您收到一条新的消息" time="2020-02-02 20:20" badge-positon="left" badge-text="dot">
				<view class="chat-custom-right">
					<text class="chat-custom-text">刚刚</text>
					<!-- 需要使用 uni-icons 请自行引入 -->
					<uni-icons type="star-filled" color="#999" size="18"></uni-icons>
				</view>
			</uni-list-chat>
		</uni-list>
	</view>
</template>

<script>
	export default {
		name:"b-account",
		data() {
			return {
				avatar: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png',
			};
		}
	}
</script>

<style>
.chat-custom-right {
	flex: 1;
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-end;
}

.chat-custom-text {
	font-size: 12px;
	color: #999;
}
</style>