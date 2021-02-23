//构造函数继承
function Parent1() {
  this.name = 'parent1'
}
Parent1.prototype.say = function () {}  //无法继承父类继承连上的方法
function Child1() {
  Parent1.call(this)  //apply
  this.type = 'child1'
}
console.log(new Child1() , new Child1().say());


//原型链继承
function Parent2() {
  this.name = 'parent2'
  this.play = [1,2,3]
}
function Child2() {
  this.type = 'child2'
}
Child2.prototype = new Parent2()

console.log(new Child2());

let s1 = new Child2()
let s2 = new Child2()
console.log(s1.play , s2.play);
s1.play.push(4)
//s1 1234
//s2 1234
//s1.__proto__ === s2.__proto__



//组合继承
function Parent3() {
  this.name = 'parent3'
  this.play = [1,2,3]
}
function Child3() {
  Parent3.call(this)
  this.type = 'child3'
}
Child3.prototype = new Parent3()
let s3 = new Child3()
let s4 = new Child3()
s3.play.push(4)
console.log(s3.play,s4.play)
//s3 1234
//s4 123



//组合继承的优化1
function Parent4() {
  this.name = 'parent4'
  this.play = [1,2,3]
}
function Child4() {
  Parent4.call(this)
  this.type = 'child4'
}
Child4.prototype = Parent4.prototype
let s5 = new Child4()
let s6 = new Child4()
console.log(s5,s6);
//s5 123
//s6 123



//组合继承的优化2
function Parent5() {
  this.name = 'parent5'
  this.play = [1,2,3]
}
function Child5() {
  Parent5.call(this)
  this.type = 'child5'
}
Child5.prototype = Object.create(Parent5.prototype)  //__.proto__
Child5.prototype.constructor = Child5

let s7 = new Child5()
console.log(s7 instanceof Child5,s7 instanceof Parent5);
console.log(s7.constructor);