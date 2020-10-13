const express = require('express')
const route = express.Router()

route.post('/test', (req, res) => {
  console.log('req', req.body)
  const {appKey, appSecret} = req.body
  res.send({
    name: 'lily',
    appKey: appKey,
    appSecret: appSecret
  })
})

route.get('/img', (req, res) => {
  console.log('getss', req.body)
  res.send({
    name: 'lily'
  })
})

module.exports = route