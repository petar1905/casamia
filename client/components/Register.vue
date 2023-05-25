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
			<h1>Register</h1>
		</div>
		
		<div class="form-group pt-1">
			<input class="form-control" type='text' placeholder='Username'/>
		</div>
		
		<div class="form-group pt-1">
			<input class="form-control" type='password' placeholder='Password'/>
		</div>
		
		<div class="form-group pt-1">
			<button class="btn btn-primary">Register</button>
		</div>
		
		<div class="form-group pt-3">
			<p>Aleardy have an account? 
				<span @click='login' class="badge badge-primary">Log in!</span>
			</p>
		</div>
	</div>
</template>

<style scoped>
	.badge-primary {background-color: #0d6efd};
</style>
