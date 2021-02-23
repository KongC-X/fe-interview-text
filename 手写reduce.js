let arr = [1,2,3,4,5]

// let sum = arr.reduce(function (init , num) {
//   init += num
//   return init
// })
// console.log(sum)

Array.prototype.MyReduce = function (cb,init) {
  let accumu = init ? init : this[0]
  for (let index = init ?  0 : 1 ; index < this.length; index++) {
    accumu = cb(accumu , this[index])
  }
  return accumu
}

let sum = arr.MyReduce(function (init,num) {
  init += num
  return init
},10)

console.log(sum)