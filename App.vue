<script>
	import { ping,closeMessageSocket } from './models/message.js'
	export default {
		data() {
			return {
				timer: null
			}
		},
		onLaunch: function() {
			console.log('App Launch')
			this.timer = setInterval(() => {
				ping()
			}, 10 * 1000)
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		onUnload() {
			console.log('App unload')
			if(this.timer) {
				clearInterval(this.timer)
			}
			closeMessageSocket()
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uview-plus/index.scss';
</style>
