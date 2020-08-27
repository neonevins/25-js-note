import Basic  from "./basic/Basic.js"
import config from "../../config.js"
export default class Score extends Basic{
  constructor(ctx) {
    super(ctx)
    this.ctx = ctx
    this.srcList = [
      "../../flappybird/font_048.png",
      "../../flappybird/font_049.png",
      "../../flappybird/font_050.png",
      "../../flappybird/font_051.png",
      "../../flappybird/font_052.png",
      "../../flappybird/font_053.png",
      "../../flappybird/font_054.png",
      "../../flappybird/font_055.png",
      "../../flappybird/font_056.png",
      "../../flappybird/font_057.png",
    ]
    this.imgList = this.srcList.map(src => {
      let img = new Image()
      img.src = src
      return img
    })

    this.width = 24
    this.height = 44
  }
  show(num){
    this.num = Math.floor(num)
    if(this.num > 99999999 || this.num < 0){
      return
    }
    let numList = (this.num + "").split("").map(str => str * 1)
    let length = numList.length

    numList.forEach((num, index) => {
      this.ctx.drawImage(this.imgList[num], config.width - (length - index) * this.width, 0)
    })
  }
}
