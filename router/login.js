const express = require('express')
const route = express.Router()

route.get('/info', (req, res) => {
  res.send('login/info')
})

module.exports = route