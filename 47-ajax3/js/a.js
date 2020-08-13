import a from "./data.js"

function fn1() {
  console.log("fn1" + a)
}

function fn2() {
  console.log("fn2" + a)
}

export default {
  fn1,
  fn2
}
