function waitHandle() {
  var dtd = $.Deferred()  // 创建一个 deferred 对象

  var wait = function (dtd) {  // 要求传入一个 deferred 对象
    var task = function () {
      console.log('执行完成')
      dtd.resolve()  // 表示异步任务已经完成
      // dtd.reject()  // 表示异步任务失败或者出错
    }
    setTimeout(task,2000)
    return dtd  // 要求返回 dtd 对象
  }

  // 注意，这里一定要用返回值
  return wait(dtd)
}