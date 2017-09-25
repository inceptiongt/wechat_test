const app = require('express')()
const config = require('./config')

app.get('/wechat', async (req, res) =>{
  const {echostr} = req.query
  console.log(req.query)
  const url = encodeURI('http://f81386c9.ngrok.io/auth')
  const redirect = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${config.appid}&redirect_uri=${url}&response_type=code&scope=snsapi_userinfo&state=test#wechat_redirect `
  res.redirect(redirect)
})
app.get('/auth', (req, res) => {
  const {code} = req.query
  const redirect = `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${config.appid}&secret=${config.appsecret}&code=${code}&grant_type=authorization_code`
  res.redirect(redirect)
})

app.listen(80, function () {
  console.log('Example app listening on port 80!');
});
