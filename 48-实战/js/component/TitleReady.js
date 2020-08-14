import config from "../../config.js"
import Basic  from "./basic/Basic.js"
export default class TitleReady extends Basic{
  constructor(ctx) {
    super(ctx)
    this.ctx = ctx
    this.src = "../../flappybird/text_ready.png"
    this.img = new Image()
    this.img.src = this.src
    this.width = 178
  }
  render(){
    // 178 * 48
    this.ctx.drawImage(this.img, (config.width - this.width) / 2, 100)
  }
}
