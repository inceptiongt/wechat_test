const app = require('express')()
const oauth = require('wechat-oauth-middleware')
const config = require('./config')

const oauthMiddleware = oauth({
  appId: config.appid,
  appSecret: config.appsecret,
  scope: 'snsapi_userinfo',
  host: 'http://192.168.1.165:8080' // 填入微信公众号回调域名
})

// app.get('/', (req, res) => {
//   const {echostr} = req.query
//   res.send(echostr)
// })

// app.get('/wechat/*', oauthMiddleware)

app.get('/wechat/login', oauthMiddleware, function (req, res) {
  console.log(req.wxUser || req.session.wxUser)
})

// app.get('/auth', (req, res) => {
//   const {code} = req.query
//   const redirect = `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${config.appid}&secret=${config.appsecret}&code=${code}&grant_type=authorization_code`
//   res.redirect(redirect)
// })

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
