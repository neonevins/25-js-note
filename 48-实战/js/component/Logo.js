import config from "../../config.js"

export default class Logo {
  constructor(ctx) {
    this.ctx = ctx
    this.src = "../../flappybird/title.png"
    this.img = new Image()
    this.img.src = this.src
    this.width = 178
  }
  render(){
    // 178 * 48
    this.ctx.drawImage(this.img, (config.width - this.width) / 2, 100)
  }
}
