export default {
  /**
   *
   * @param point {x , y}
   * @param block {x, y, w, h}
   */
  pointInBlock(point, block){
    return point.x >= block.x && point.x <= (block.x + block.w) && point.y >= block.y && point.y <= (block.y + block.h)
  }
}
