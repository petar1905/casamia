<script>
	import axios from 'axios'
	export default {
		data() {
			return {username: ''}
		},
		methods: {
			async login() {
				await axios.post('/auth/login', null, {params: {user: this.username}})
				.then(res => {
					if (res.data.exists) this.$router.push(`/dashboard/${res.data.user}`)
				})
				//.then(res => console.log(res.data.exists))
				.catch(err => alert(err + "\nNo account has been found!"))
				this.username = ''
			},
			gotoRegister(){
				this.$router.push('/register')
			}
		}
	}
</script>

<template>
	<div class='jumbotron text-center p-5'>
		<div class='form-group pt-1'>
			<h1>Login</h1>
		</div>
		
		<div class='form-group pt-1'>
			<input v-model='username' @keyup.enter='login'
			class='form-control border border-dark' type='text' placeholder='Username'/>
		</div>
		
		<!--<div class='form-group pt-1'>
			<input class='form-control' type='password' placeholder='Password'/>
		</div> -->
		
		<div class='form-group pt-1'>
			<button @click='login' class='btn btn-primary'>Login</button>
		</div>
		
		<div class='form-group pt-3'>
			<p>No account?
				<span @click='gotoRegister' class='btn btn-secondary'
				style='padding: 0% 1%'>Register today!</span>
			</p>
		</div>
	</div>
</template>
