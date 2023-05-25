import express from 'express'
const auth = express.Router()

auth.post('/login', (req, res) => {
	// login code
})

auth.post('/register', (req, res) => {
	// register code
})

export default auth
