const express = require('express')
const cookieParser = require('cookie-parser');
const {readFile} = require('./file/readFile.js')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3000

app.listen(PORT, ()=>{
  console.log(`http://localhost:${PORT}`)
})

app.use(cookieParser());
// bodyParser中间件，处理转化body请求内容转，把不同格式的请求内容统一转为对象格式
app.use(bodyParser.urlencoded({
  extended: true
}))
// app.use(bodyParser.json())
// app.use(bodyParser.row()) 

// 接口请求
app.get('/test/dependencies', (req, res) => {
  const {type} = req.query
  console.log('types', type)
  readFile('./package.json').then(content => {
    content = JSON.parse(content)
    let text = type == 'dev' ? content['devDependencies'] : content['dependencies']
    res.status(200)
    // res.type('application/json')
    res.send(text)
  }).catch(err => {
    res.status(500)
    res.type('application/json')
    res.send(err)
  })
})

app.post('/test/add', (req, res) => {
  let body = req.body
  res.status(200)
  res.type('application/json')
  res.send(body)
})

// 加载api模块
app.use('/login', require('./router/login'))
app.use('/user', require('./router/user'))
app.use('/master', require('./router/master'))

// 静态资源文件服务器
app.use(express.static("./dist"))

// 当路径既不是路由，也不是文件，返回404
app.use((req, res) => {
  res.status(404)
  res.send('No Found')
  // res.redirect(301, 'http://www.baidu.com') // 301重定向
})


