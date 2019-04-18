const express = require('express')
const app = express()
const ctrl = require('./controller')
const SERVER_PORT = 4000

app.use(express.json())

app.get('/messages', ctrl.getMessages)
app.post('/message', ctrl.addMessage)

app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))
