import Ready from "./scene/Ready.js"
import Start from "./scene/Start.js"
import Gaming from "./scene/Gaming.js"
// 游戏场景类, 负责游戏场景选择切换
export default class Scene{
  constructor(ctx) {
    this.ctx = ctx
    this.status = 2
    this.sceneArr = [Start, Ready, Gaming]
    // this.sceneList = {
    //   start: Start, // 第一个场景
    //   ready: Ready,  // 第二个场景
    //   gaming: Gaming
    // }
    // 初始化第一个场景
    this.stage = new this.sceneArr[this.status](this.ctx)
    this.stage.register()
  }
  // 场景的渲染
  render(){
    // 场景状态改变的判断
    if(this.stage.next){
      // 先把当前场景中的所有的元素注册过的事件全部取消掉
      this.stage.unregister()
      // 切换到下一个场景
      this.status++
      this.stage = new this.sceneArr[this.status](this.ctx)
      this.stage.register()
    }
    // 渲染场景
    this.stage.render()
  }
}
