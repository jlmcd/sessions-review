const express = require('express')
const session = require('express-session')
const app = express()
const ctrl = require('./controller')
const SERVER_PORT = 4000
const SECRET = 'aweofuhawegiUIjaw93893ghiou2p390ugiwj'

app.use(express.json())
app.use(
  session({
    secret: SECRET,
    saveUninitialized: false,
    resave: false
  })
)

app.get('/messages', ctrl.getMessages)
app.post('/message', ctrl.addMessage)

app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))
