<script>
	import axios from 'axios'
	export default {
		data() {
			return {username: ''}
		},
		methods: {
			async register() {
				await axios.post('/auth/register', null, {params: {user: this.username}})
				//.then(res => console.log(res))
				.then(res => alert(`Account ${res.data.user} has been successfully created!`))
				.catch(err => alert(err+"\nSuch account aleardy exists!\nDid you mean to login?"))
				this.username = ''
				this.gotoLogin()
			},
			gotoLogin() {
				this.$router.push('/login')
			}
		}
	}

</script>

<template>
	<div class='jumbotron text-center p-5'>
		<div class='form-group pt-1'>
			<h1>Register</h1>
		</div>
		
		<div class='form-group pt-1'>
			<input class='form-control' v-model='username' 
			type='text' placeholder='Username'/>
		</div>
		
		<!-- <div class='form-group pt-1'>
			<input class='form-control' type='password' placeholder='Password'/>
		</div> -->
		
		<div class='form-group pt-1'>
			<button @click='register' class='btn btn-primary'>Register</button>
		</div>
		
		<div class='form-group pt-3'>
			<p>Aleardy have an account? 
				<span @click='gotoLogin' class='btn btn-secondary'
				style='padding: 0% 1%'>Log in!</span>
			</p>
		</div>
	</div>
</template>
