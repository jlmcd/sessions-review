const messages = []

module.exports = {
  getMessages(req, res) {
    res.status(200).send(messages)
  },
  addMessage(req, res) {
    if (req.session.messages) {
      req.session.messages.unshift(req.body.message)
    } else {
      req.session.messages = []
      req.session.messages.unshift(req.body.message)
    }
    // messages.unshift(req.body.message)
    res.status(200).send(req.session.messages)
  }
}