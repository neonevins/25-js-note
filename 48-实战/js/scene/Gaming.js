// 第三个游戏场景 正式游戏
import Background from "../component/Background.js"
import Land from "../component/Land.js"
import Bird from "../component/Bird.js"
export default class Gaming {
  constructor(ctx) {
    this.ctx = ctx
    this.bg = new Background(ctx)
    this.land = new Land(ctx)
    this.bird = new Bird(ctx)
    this.boxList = [
      this.bg,
      this.land,
      this.bird
    ]
    this.next = false
  }
  render(){
    this.bg.render()
    this.land.render()
    this.bird.render()
  }
  register(){
    console.log("register")
    this.boxList.forEach(item => item.register())
  }
  unregister(){
    this.boxList.forEach(item => item.unregister())
  }
}
