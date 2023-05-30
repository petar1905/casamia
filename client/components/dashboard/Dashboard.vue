<script>
	import MsgBuffer from './MsgBuffer.vue'
	import MsgContainer from './MsgContainer.vue'
	import TopBar from './TopBar.vue'
	export default {
		components:{MsgBuffer, MsgContainer, TopBar},
		data() {
			return {
				socket: new WebSocket('ws://localhost:3001'),
				myMsg: '',
				msgCollection: []
			}
		},
		mounted() {
			this.socket.addEventListener("message", (event) => {
				this.msgCollection.push(JSON.parse(event.data))
			})
		},
		methods: {
			send() {
				const data = {
					user: this.$route.params.user,
					msg: this.myMsg
				}
				this.socket.send(JSON.stringify(data))
			}
		}
	}
</script>

<template>
	<TopBar/>
	<MsgContainer :msgCollection='msgCollection'/>
	<MsgBuffer @update:msg='newValue => this.myMsg = newValue'
	@send:msg='send'/>
</template>

<style scoped></style>
