import Basic  from "./basic/Basic.js"
import config from "../../config.js"
export default class Pipe extends Basic{
  constructor(ctx) {
    super(ctx)
    this.ctx = ctx
    this.srcUp = "../../flappybird/pipe_down.png"
    this.srcDown = "../../flappybird/pipe_up.png"
    this.imgUp = new Image()
    this.imgDown = new Image()
    this.imgUp.src = this.srcUp
    this.imgDown.src = this.srcDown
    this.width = 52
    this.height = 320
    this.x = config.width
    this.y = 50 + Math.random()*200
    this.size = 150 // 两根柱子之间的间隙
    this.speed = -2 // 向左的速度
    this.getScore = false
  }
  render(){
    this.getScore = false
    this.x += this.speed
    if(this.x <= -this.width) {
      this.x = config.width
      this.y = 100 + Math.random()*100
      this.getScore = true
    }

    this.ctx.drawImage(this.imgUp, this.x, this.y - this.height)
    this.ctx.drawImage(this.imgDown, this.x, this.y + this.size)
  }
}
