const express = require('express')
const route = express.Router()

route.post('/info', (req, res) => {
  const {appKey, appSecret} = req.body
  console.log('req', req.body)
  res.send({
    name: 'lily',
    appKey: appKey,
    appSecret: appSecret
  })
})

module.exports = route