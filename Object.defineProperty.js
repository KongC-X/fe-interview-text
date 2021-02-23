/*
let obj = {}
let name = 'kongc'

Object.defineProperty(obj , "name" , {
  get : function () {
    console.log('get')
    return name
  },
  set : function (newVal) {
    console.log('set')
    name = newVal
  }
})

console.log(obj.name)   // 可以监听到
obj.name = 'list'    // 可以监听到
*/

//模拟实现
let mv = {}
let data = {
  price : 100,
  name : 'kongc'
}

let key , value
for(key in data){
  //命中闭包。新建一个函数，保证 key 的独立的作用域
  (function (key) {
    Object.defineProperty(mv , key , {
      get : function () {
        console.log('get')
        return data[key]
      },
      set : function (newVal) {
        console.log('set')
        data[key] = newVal
      }
    })
  })(key)
}