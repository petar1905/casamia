<script>
	export default {
		methods: {
			login() {
				this.$router.push('/login')
			},
			register() {
				this.$router.push('/register')
			}
		}
	}
</script>

<template>
	<div class="jumbotron text-center p-5">
		<div class="form-group pt-1">
			<h1>Welcome Back!</h1>
		</div>
		
		<div class="form-group pt-1">
			<p>Seems like you are not logged in on this device...</p>
			<a>
				<button @click='login' class="btn btn-primary">Login</button>
			</a>
		</div>
		
		<div class="form-group pt-1">
			<button @click='register' class="btn btn-secondary">Register</button>
		</div>
	</div>
</template>

<style scoped>
</style>
