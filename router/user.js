const express = require('express')
const route = express.Router()

route.get('/info', (req, res) => {
  res.send('user/info')
})

module.exports = route