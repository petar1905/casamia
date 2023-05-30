import WebSocket,{ WebSocketServer } from 'ws'

const chatServer = new WebSocketServer({port: 3001})

chatServer.on('connection', socket => {
	console.log('something')

  socket.on('error', console.error)

  socket.on('message', data => {
  	console.log(JSON.parse(data))
  	chatServer.clients.forEach(client => {
  		if (client.readyState === WebSocket.OPEN) client.send(`${data}`)
  	})
    /*chatServer.clients.forEach(client => {
    	if (client !== chatServer && client.readyState === WebSocket.OPEN) {
    		client.send(`${data}`)
    	}
    }) */
  })
  
})

export default chatServer
