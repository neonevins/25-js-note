// 第三个游戏场景 正式游戏
import Background from "../component/Background.js"
import Land from "../component/Land.js"
import Bird from "../component/Bird.js"
import Pipe  from "../component/Pipe.js"
import Score from "../component/Score.js"
export default class Gaming {
  constructor(ctx) {
    this.ctx = ctx
    this.bg = new Background(ctx)
    this.land = new Land(ctx)
    this.bird = new Bird(ctx)
    this.pipe = new Pipe(ctx)
    this.score = new Score(ctx)
    this.boxList = [
      this.bg,
      this.land,
      this.bird,
      this.pipe,
      this.score
    ]
    this.scoreCount = 0
    this.next = false
  }
  render(){
    this.bg.render()
    this.pipe.render()
    this.land.render()
    this.bird.render()
    if(this.pipe.getScore){
      this.scoreCount++
    }
    this.score.show( this.scoreCount)
    // 单独的 计算 bird 和 pipe
    let result = this.bird.checkCollide(this.pipe) // boolean true: 碰撞 false 没有
    if(result){
      // 游戏结束
      this.next = true
    }
  }
  register(){
    console.log("register")
    this.boxList.forEach(item => item.register())
  }
  unregister(){
    this.boxList.forEach(item => item.unregister())
  }
}
