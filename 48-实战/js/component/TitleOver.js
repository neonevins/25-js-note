import Basic  from "./basic/Basic.js"
import config from "../../config.js"
export default class TitleOver extends Basic{
  constructor(ctx) {
    super(ctx)
    this.ctx = ctx
    this.src = "../../flappybird/text_game_over.png"
    this.img = new Image()
    this.img.src = this.src
    this.width = 204
  }
  render(){
    // 178 * 48
    this.ctx.drawImage(this.img, (config.width - this.width) / 2, 100)
  }
}
