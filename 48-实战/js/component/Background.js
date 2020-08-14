import config from "../../config.js"
import Basic  from "./basic/Basic.js"
export default class Background extends Basic{
  constructor(ctx) {
    super(ctx)
    this.ctx = ctx
    this.src = "../../flappybird/bg_day.png"
    this.img = new Image()
    this.img.src = this.src
    this.speed = -2
    this.x = 0
  }
  render(){
    this.x += this.speed
    if(this.x <= - config.width) this.x = 0
    this.ctx.drawImage(this.img, this.x, 0, config.width, config.height)
    this.ctx.drawImage(this.img, this.x + config.width, 0, config.width, config.height)
  }
}
