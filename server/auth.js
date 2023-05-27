import express from 'express'
const auth = express.Router()

import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient({})

async function createUser(queryName) {
	const user = await prisma.users.create({
  	data: {name: queryName}
	})
}

async function findUser(queryName) {
	const user = await prisma.users.findFirst({
  	where: {name:queryName}
	})
	return user
}


auth.post('/login', async (req, res) => {
	const user = await findUser(req.query.user)
	if (!user) return res.status(404).json({'exists': false})
	res.status(200).json({'user': user.name, 'exists': true})
})

auth.post('/register', async (req, res) => {
	const user = await findUser(req.query.user)
	if (user) return res.status(403).json({'exists': true})
	const newUser = await createUser(req.query.user)
	res.status(200).json({'user': req.query.user, 'exists': false})
})

export default auth
