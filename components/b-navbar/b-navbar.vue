<template>
	<view>
		<up-navbar :title="title" :border="false" leftIcon="" bgColor="#fafafa">
			<template #right>
				<up-icon name="plus" size="20" @tap="showMenu = true"></up-icon>
			</template>
		</up-navbar>
		<up-popup v-model:show="showMenu" mode="right">
			<uni-list style="margin-top: 50px; width: 150px">
				<uni-list-item title="发起群聊"></uni-list-item>
				<uni-list-item title="添加朋友"></uni-list-item>
				<uni-list-item title="扫一扫"></uni-list-item>
				<uni-list-item title="收付款"></uni-list-item>
			</uni-list>
		</up-popup>
	</view>
</template>

<script>
	export default {
		name:"b-navbar",
		props: ['title'],
		data() {
			return {
				showMenu: false
			};
		},
		methods: {
			
		}
	}
</script>

<style>

</style>