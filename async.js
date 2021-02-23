async function async1() { 
  console.log('async1 start')  // 2
  await async2()

  //下面三行都是异步回调 callback 的内容
  console.log('async1 end')  //5
  await async3()

  //下面一行都是异步回调 callback 的内容
  console.log('async1 end 2')  //7
}

async function async2() {
  console.log('async2')  // 3
}

async function async3() {
  console.log('async3')  // 6
}

console.log('script start')  // 1
async1()
console.log('script end')   //4