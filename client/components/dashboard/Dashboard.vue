<script>
	import MsgBuffer from './MsgBuffer.vue'
	import MsgContainer from './MsgContainer.vue'
	export default {
		components:{MsgBuffer, MsgContainer},
		data() {
			return {
				socket: new WebSocket('ws://localhost:3001'),
				msg: ''
			}
		}
	}
</script>

<template>
	<p class='text-center'>Logged in as {{$route.params.user}}</p>
	<MsgContainer/>

	<MsgBuffer @update:msg='newValue => this.msg = newValue'
	@send:msg='this.socket.send(this.msg)'/>
</template>

<style scoped></style>
