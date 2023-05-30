<script>
	export default {
		props:['msgCollection']
	}
</script>

<template>
	<div class='pt-5 pb-5' v-for='msg in msgCollection'>
		<div class='m-1 d-flex justify-content-end' v-if='msg.user == $route.params.user'>
			<div>
				<div class='bg-primary text-white m-1 p-3 my-msg'>
					<p>{{msg.msg}}</p>
				</div>
				<p class='m-1' style='text-align:right'>{{msg.user}}</p>
			</div>
		</div>
		
		<div class='m-1 d-flex' v-else>
			<div>
				<div class='border border-dark m-1 p-3 msg'>
					<p>{{msg.msg}}</p>
				</div>
				<p class='m-1'>{{msg.user}}</p>
			</div>
		</div>
		
	</div>
	<!-- <div class='pt-5' v-for='n in 100'>
		<div class='m-1 d-flex justify-content-end'>
			<div>
				<div class='bg-primary text-white p-3 my-msg'>
					<p>Lorem Ipsum</p>
				</div>
				<p class='m-1' style='text-align:right'>Me</p>
			</div>
		</div>

		<div class='m-1 d-flex'>
			<div>
				<div class='border border-dark m-1 p-3 msg'>
					<p>Lorem Ipsum</p>
				</div>
				<p class='m-1'>Them</p>
			</div>
		</div>
	</div> -->
</template>

<style scoped>
	.my-msg {
		border-radius: 20px 20px 0px 20px;
	}
	
	.msg {
		border-radius: 20px 20px 20px 0px;
	}
</style>
