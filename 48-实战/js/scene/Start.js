import Background from "../component/Background.js"
import Logo   from "../component/Logo.js"
import Button from "../component/button.js"
// 就是 游戏开始画面 第一个场景
export default class Start {
  constructor(ctx) {
    this.ctx = ctx
    this.bg = new Background(this.ctx)
    this.logo = new Logo(this.ctx)
    this.button = new Button(this.ctx)
    this.next = false // 表示当前场景没有结束
  }
  render(){
    // 状态变更
    this.next = this.button.next

    // 渲染
    this.bg.render()
    this.logo.render()
    this.button.render()
  }


}
