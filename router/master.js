const express = require('express')
const route = express.Router()
const axios = require('axios')
const cheerio = require('cheerio');

route.post('/test', (req, res) => {
  console.log('cookie', req.cookies)
  const {appKey, appSecret} = req.body
  res.send({
    name: 'lily',
    appKey: appKey,
    appSecret: appSecret
  })
})

// 热点新闻爬取
route.get('/hotnew', (req, res) => {
  axios.get('http://news.baidu.com', {}, {withCredentials: true}).then(result => {
    const $ = cheerio.load(result.data);
    const hotNews = []
    $('div#pane-news ul li a').each((idx, ele) => {
      // cherrio中$('selector').each()用来遍历所有匹配到的DOM元素
      // 参数idx是当前遍历的元素的索引，ele就是当前便利的DOM元素
      const news = {
        title: $(ele).text(),        // 获取新闻标题
        href: $(ele).attr('href')    // 获取新闻网页链接
      };
      hotNews.push(news)              // 存入最终结果数组
    });
    res.send(hotNews)
  })
})

module.exports = route