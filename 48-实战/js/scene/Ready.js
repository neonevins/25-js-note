import TitleReady from "../component/TitleReady.js"
import Background from "../component/Background.js"
// 第二个场景
export default class Ready {
  constructor(ctx) {
    this.ctx = ctx
    this.titleReady = new TitleReady(ctx)
    this.bg = new Background(ctx)
    this.boxList = [
      this.bg,
      this.titleReady
    ]
    this.next = false
    setTimeout(()=>{
      this.next = true
    }, 3000)
  }
  render(){
    this.bg.render()
    this.titleReady.render()
  }
  register(){
    this.boxList.forEach(item => item.register())
  }
  unregister(){
    this.boxList.forEach(item => item.unregister())
  }
}
