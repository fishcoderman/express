const express = require('express')
const route = express.Router()

route.post('/info', (req, res) => {
  res.send({
    name: 'lily',
    age: 20,
    hobby: 'play'
  })
})

module.exports = route