Function.prototype.bind1 = function () { 
  //将参数拆解为数组
  const args = Array.prototype.slice.call(arguments)

  //获取this(数组第一项)
  const t = args.shift()

  //fn1.bind(...)中的fn1
  const self = this

  //返回一个函数
  return function () { 
    return self.apply(t,args)
   }
 }