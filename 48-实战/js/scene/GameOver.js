import Background from "../component/Background.js"
import TitleOver  from "../component/TitleOver.js"
export default class GameOver {
  constructor(ctx) {
    this.ctx = ctx
    this.bg = new Background(ctx)
    this.titleOver = new TitleOver(ctx)
    this.bg.speed = 0
    this.boxList = [
      this.bg,
      this.titleOver
    ]

  }
  render(){
    this.bg.render()
    this.titleOver.render()
  }
  register(){
    this.boxList.forEach(item => item.register())
  }
  unregister(){
    this.boxList.forEach(item => item.unregister())
  }
}
