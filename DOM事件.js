//事件捕获的具体流程
// let ev = document.getElementById('ev')
// window.addEventListener('click',function () { 
//   console.log('window captrue');
//  },true)

//  document.addEventListener('click',function () {
//    console.log('document captrue');
//  },true)

//  document.documentElement.addEventListener('click',function () {
//    console.log('html captrue');
//  },true)

//  document.body.addEventListener('click',function () {
//    console.log('body captrue');
//  },true)

//  ev.addEventListener('click',function () {
//    console.log('ev captrue');
//  },true)

 //window captrue
 //document captrue
 //html captrue
 //body captrue
 //ev captrue




//自定义事件
// var eve = new Event('test')
// ev.addEventListener('test',function () {
//   console.log('test dispatch');
// })
// setTimeout(function () {
//   ev.dispatchEvent(eve)
// },1000)
