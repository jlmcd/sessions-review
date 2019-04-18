const messages = []

module.exports = {
  getMessages(req, res) {
    res.status(200).send(messages)
  },
  addMessage(req, res) {
    messages.unshift(req.body.message)
    res.status(200).send(messages)
  }
}