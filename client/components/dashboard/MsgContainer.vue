<script></script>

<template>
	<div v-for='n in 100'>
		<div class='m-1' v-if="n % 2 == 0">
			<div class='bg-success text-white p-3 my-msg'>
				<p v-if="n % 3 == 0 && n % 5 == 0">FizzBuzz</p>
				<p v-else-if="n % 5 == 0">Buzz</p>
				<p v-else-if="n % 3 == 0">Fizz</p>
				<p v-else >{{n}}</p>
			</div>
			<p class='m-1' style='text-align:right'>Me</p>
		</div>

		<div class='m-1' v-else>
			<div class='border border-dark m-1 p-3 msg'>
				<p v-if="n % 3 == 0 && n % 5 == 0">FizzBuzz</p>
				<p v-else-if="n % 5 == 0">Buzz</p>
				<p v-else-if="n % 3 == 0">Fizz</p>
				<p v-else>{{n}}</p>
			</div>
			<p class='m-1'>Them</p>
		</div>
	</div>
</template>

<style scoped>
	.my-msg {
		border-radius: 20px 20px 0px 20px;
	}
	
	.msg {
		border-radius: 20px 20px 20px 0px;
	}
</style>
