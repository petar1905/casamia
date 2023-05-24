import express from 'express'
const app = express()
const port = 3000

app.use('/media', express.static('public'))

app.get('/', (req,res) => {
	res.render('index.html.ejs')
})

app.listen(port)
