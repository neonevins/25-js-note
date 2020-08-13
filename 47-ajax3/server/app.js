const express = require("express")
const bodyParser = require('body-parser')
// 框架实例
const app = express()

// 设计 当前文件夹下面的public作为 8000端口访问的默认返回页面
app.use(express.static("public"))
// 转JSON的格式
app.use(bodyParser.json())
// 请求的数据转码
app.use(bodyParser.urlencoded({extended: true}))

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  next()
})
// 访问data路由, 会执行后续函数
app.get("/data", function (req, res) {
  // 拿到前端发送的msg判断
  // if(req.query.msg === "9527"){
  //   // 返回给前端数据
  //   res.send("密码正确")
  // }else{
  //   res.send("密码错误")
  // }
  console.log(req.query)
  res.send(req.query)
})
app.post("/info", function (req, res) {
  console.log(req.body)
  res.send(req.body)
})


app.get("/jsonp", function (req, res) {
  const fn = req.query.cb // 后端拿到函数名
  let data = JSON.stringify({name: "datafromjsonp"})
  if(req.query.key === "1"){
    res.send(`${fn}(${data})`) // 写好了一个函数执行
  }else{
    res.send(`${fn}(null)`)
  }
})

// 监听访问8000端口的操作
app.listen(8000)
