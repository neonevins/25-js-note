import Ready from "./scene/Ready.js"
import Start from "./scene/Start.js"
import Gaming from "./scene/Gaming.js"
// 游戏场景类, 负责游戏场景选择切换
export default class Scene{
  constructor(ctx) {
    this.ctx = ctx
    this.status = 0
    this.sceneArr = ["start", "ready", "gaming", "dead"]
    this.sceneList = {
      start: new Start(this.ctx), // 第一个场景
      ready: new Ready(this.ctx),  // 第二个场景
      gaming: new Gaming(this.ctx)
    }
  }
  // 场景的渲染
  render(){
    // 场景状态改变的判断
    if(this.sceneList[this.sceneArr[this.status]].next){
      this.status++
    }
    // 渲染场景
    this.sceneList[this.sceneArr[this.status]].render()
  }
}
