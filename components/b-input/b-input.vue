<template>
	<view class="b-input">
		<up-icon name="volume" size="25" class="b-input-item" 
			v-if="status.volumeBtn" @click="volumeBtnClick"></up-icon>
		<up-icon name="/static/keyboard.png" size="25" class="b-input-item" 
			v-if="status.leftKeyBoardBtn" @click="leftKeyBoardBtnClick"></up-icon>
		<up-input class="b-input-item" style="background-color: white;" :modelValue="inputText"
			@change="inputChange" :focus="true" :customStyle="inputStyle"></up-input>
		<up-button text="按住 说话" v-if="status.soundBtn" @click="soundBtnClick"></up-button>
		<up-icon name="/static/express.png" size="29" class="b-input-item" 
			v-if="status.expressBtn" @click="expressBtnClick"></up-icon>
		<up-icon name="/static/keyboard.png" size="25" class="b-input-item" 
			v-if="status.rightKeyBoardBtn" @click="rightKeyBoardBtnClick"></up-icon>
		<up-icon name="plus-circle" size="25" class="b-input-item" 
			v-if="status.plusBtn" @click="plusBtnClick"></up-icon>
		<up-button text="发送" size="mini" type="success" style="width: 40px;height: 30px" 
			v-if="status.sendBtn" @click="sendBtnClick"></up-button>
	</view>
</template>

<script>
import { Message } from '../../models/message.js';
const originStatus = {
	volumeBtn: true,
	leftKeyBoardBtn:false,
	inputBtn: true,
	soundBtn: false,
	expressBtn: true,
	rightKeyBoardBtn: false,
	plusBtn: true,
	sendBtn: false
}
export default {
	name:"b-input",
	props: ['to'],
	emits: ['messageHandle'],
	data() {
		return {
			status: {...originStatus},
			inputText: '',
		};
	},
	computed: {
		inputStyle() {
			let style = {}
			if(!this.status.inputBtn) {
				style = {display: 'none'}
			}
			return style
		}
	},
	methods: {
		resetStatus() {
			this.status = {...originStatus}
		},
		volumeBtnClick() {
			this.resetStatus()
			this.status.volumeBtn = false
			this.status.leftKeyBoardBtn = true
			this.status.soundBtn = true
			this.status.inputBtn = false
		},
		leftKeyBoardBtnClick() {
			this.resetStatus()
			if(this.inputText.length > 0) {
				this.status.plusBtn = false
				this.status.sendBtn = true
			}
		},
		expressBtnClick() {
			this.resetStatus()
			this.status.expressBtn = false
			this.status.rightKeyBoardBtn = true
		},
		rightKeyBoardBtnClick() {
			this.resetStatus()
			if(this.inputText.length > 0) {
				this.status.plusBtn = false
				this.status.sendBtn = true
			}
		},
		inputChange(value) {
			this.inputText = value
			if(value.length > 0) {
				this.status.plusBtn = false
				this.status.sendBtn = true
			}
		},
		plusBtnClick() {
			this.resetStatus()
			//
		},
		soundBtnClick() {
			
		},
		sendBtnClick() {
			this.$emit('messageHandle', Message.buildTextMessage(this.to, this.inputText))
			this.inputText = ''
			this.resetStatus()
		}
	}
}
</script>

<style scoped>
.b-input {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 5px 5px 20px 5px;
}
.b-input-item {
	padding: 0px 5px 0px 5px;
}
</style>