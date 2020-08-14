import config from "../../config.js"
import tools from "../tools.js"
import Basic from "./basic/Basic.js"
export default class Button extends Basic{
  constructor(ctx) {
    super(ctx)
    this.ctx = ctx
    this.src = "../../flappybird/button_play.png"
    this.img = new Image()
    this.img.src = this.src
    this.width = 116
    this.height = 70
    this.x = (config.width - this.width) / 2
    this.y = config.height / 4 * 3
    this.next = false // 表示没有点击
    this.registerFn = (e) => {
      let point = {
        x: e.offsetX,
        y: e.offsetY
      }
      let block = {
        x: this.x,
        y: this.y,
        w: this.width,
        h: this.height
      }
      if (tools.pointInBlock(point, block)) {
        // 清除掉点击事件
        this.next = true // button已经被点了
      }
    }
  }
  render(){
    this.ctx.drawImage(this.img, this.x, this.y)
  }
  // 注册状态
  register(){
    config.canvas.addEventListener("click", this.registerFn)
  }
  // 取消之前的注册事件
  unregister(){
    config.canvas.removeEventListener("click", this.registerFn)
  }
}
