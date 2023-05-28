import express from 'express'
import auth from './auth.js'
import chatServer from './chatserver.js'
const app = express()
const port = 3000

app.use('/media', express.static('public'))
app.use('/auth', auth)
app.use(express.json())

app.get('/', (req,res) => {
	res.render('index.html.ejs')
})

app.listen(port)
