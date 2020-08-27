import Basic  from "./basic/Basic.js"
import config from "../../config.js"
import tools  from "../tools.js"
export default class Bird extends Basic{
  constructor(ctx) {
    super(ctx)
    this.ctx = ctx
    this.imgList = []
    for(let i = 0;i < 3;i++){
      let img = new Image()
      img.src = `../../flappybird/bird0_${i}.png`
      this.imgList.push(img)
    }
    this.step = 0
    this.width = 48
    this.height = 48
    this.x = 50
    this.y = 100
    this.vy = 1
    this.g = 0.1
    this.registerFn = tools.debounce((e) => {
      this.jump()
    }, 500)

    this.dead = false
    setTimeout(() => {
      this.dead = true
    }, 3000)
  }
  render(){
    this.update()
    this.ctx.drawImage(this.img, this.x, this.y)
  }
  jump(){
    this.vy = -3.5
  }
  update(){
    let s = Math.floor(this.step++ / 3) % 3
    this.img = this.imgList[s]

    // 速度修改 位置
    this.y += this.vy
    if(this.y >= config.height - 150){
      this.y = config.height - 150
      this.vy = 0
    }
    if(this.y <= -10){
      this.y = -10
      this.vy = 0
    }
    // 重力加速度修改 速度
    this.vy += this.g
  }
  register() {
    config.canvas.addEventListener("click", this.registerFn)
  }


  /**
   * return boolean true: 碰撞 false 没有
   */
  checkCollide(pipe){
    // 鸟的大小位置状态
    let birdSize = {
      x: this.x + 10,
      y: this.y + 10,
      w: this.width - 20,
      h: this.height - 20
    }
    //
    let pipeInfo = {
      x: pipe.x,
      w: pipe.width,
      y: pipe.y,
      size: pipe.size
    }
    // 如果 鸟都还没经过柱子, 直接就是false
    if(
      birdSize.x + birdSize.w < pipeInfo.x // 鸟在左边
      ||
      birdSize.x > pipeInfo.x + pipeInfo.w // 鸟在右边
    ){
      return false
    }
    // 一定是鸟正在经过柱子的时候
    if(
      birdSize.y > pipeInfo.y // 鸟撞不上上面
      &&
      birdSize.y + birdSize.h < pipeInfo.y + pipeInfo.size // 鸟撞不上下边
    ){
      return false
    }

    return true
  }
}
