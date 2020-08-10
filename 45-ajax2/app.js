// 引入一个express框架, 负责快速实现接口
const express = require("express")
// 框架实例
const app = express()
// 设计 当前文件夹下面的public作为 8000端口访问的默认返回页面
app.use(express.static("public"))
// 访问data路由, 会执行后续函数
app.get("/data", function (req, res) {
  // 拿到前端发送的msg判断
  if(req.query.msg === "9527"){
    // 返回给前端数据
    res.send("密码正确")
  }else{
    res.send("密码错误")
  }
})
// 监听访问8000端口的操作
app.listen(8000)
