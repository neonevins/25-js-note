import Basic  from "./basic/Basic.js"
import config from "../../config.js"
export default class Land extends Basic{
  constructor(ctx) {
    super(ctx)
    this.ctx = ctx
    this.src = "../../flappybird/land.png"
    this.img = new Image()
    this.img.src = this.src
    this.width = 336
    this.height = 112
    this.x = 0
    this.y = config.height - 112
    this.speed = -2
  }
  render(){
    this.x += this.speed
    if(this.x <= - config.width) this.x = 0

    this.ctx.drawImage(this.img, this.x, this.y)
    this.ctx.drawImage(this.img, this.x + config.width, this.y)
  }
}
