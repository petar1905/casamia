import { WebSocketServer } from 'ws'

const chatServer = new WebSocketServer({port: 3001})

chatServer.on('connection', socket => {
	console.log('something')

  socket.on('error', console.error)

  socket.on('message', data => {
    console.log(`${data}`)
  });
});

export default chatServer
