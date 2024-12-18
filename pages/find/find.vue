<template>
	<view>
		<up-navbar title="发现" :border="false" leftIcon="" bgColor="#fafafa">
			<template #right>
				<view class="u-nav-slot">
					<up-icon name="search" size="20" ></up-icon>
					<up-line direction="column" :hairline="false" length="25" margin="0 10rpx"></up-line>
					<up-icon name="plus" size="20"></up-icon>
				</view>
		  </template>
		</up-navbar>
		<view class="body">find</view>
		<b-tabbar></b-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
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
}
</style>
