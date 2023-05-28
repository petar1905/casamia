<script>
	export default {
		props:['msg'],
		emits: ['update:msg', 'send:msg']
	}
</script>

<template>
	<div class='d-flex fixed-bottom p-1 bg-white'>
		<input :value='msg' placeholder='Message'
		@input="$emit('update:msg', $event.target.value)" 
		class='form-control w-100'/>
		
		<button @click="$emit('send:msg')"
		class='btn btn-primary ms-1'>Send</button>
	</div>
</template>
