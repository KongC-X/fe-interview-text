//基础版
//首先要明确promise是一个类，所以我们用class声明
//其次，构造函数中接收一个executor,它有两个参数，一个是resolve,一个是reject
//这里要注意，reslove和reject都是函数
class Promise{
  //构造函数（入参是执行器，包括reslove与reject两个函数）
  constructor(executor){
    //必要的初始化，这里用到状态，值和原因三个变量
    this.state = 'pending';
    this.value = undefined;
    this.reason = undefined;
    //定义成功函数，入参是value
    let resolve = value => {
      //首先要判断state是否为等状态，如果不是则不做任何处理
      if(this.state === 'pending'){
        //修改状态
        this.state = 'fulfilled';
        //更新值
        this.value = value;
      }
    };
    let reject = reason => {
      //同样的逻辑
      if(this.state === 'pending'){
        this.state = 'rejected';
        this.reason = reason;
      }
    };
    //这里promise对象的主逻辑，执行executor，如果执行器出错，则捕获错误后执行reject函数
    try {
      executor(resolve,reject);
    } catch (err) {
      reject(err);
    }
  }
  //定义promise的then函数
  //then方法接收两个参数，如果状态为fulfilled,执行onFulfilled
  //如果状态为rejected,则执行onRejected
  then(onFulfilled,onRejected){
    if(this.state === 'fulfilled'){
      onFulfilled(this.value);
    };
    if(this.state === 'rejected'){
      onRejected(this.reason);
    }
  }
}





//进阶   解决异步实现
class Promise{
  //构造函数（入参是执行器，包括reslove与reject两个函数）
  constructor(executor){
    //必要的初始化，这里用到状态，值和原因三个变量
    this.state = 'pending';
    this.value = undefined;
    this.reason = undefined;
    //成功回调函数数组和失败回调函数数组
    this.onResolvedCallbacks = [];
    this.onRejectCallbacks = [];
    //定义成功函数，入参是value
    let resolve = value => {
      //首先要判断state是否为等状态，如果不是则不做任何处理
      if(this.state === 'pending'){
        //修改状态
        this.state = 'fulfilled';
        //更新值
        this.value = value;
        //成功的话遍历成功回调函数数组然后执行这些函数
        this.onResolvedCallbacks.forEach(fn => fn());
      }
    };
    let reject = reason => {
      //同样的逻辑
      if(this.state = 'pending'){
        this.state = 'rejected';
        this.reason = reason;
        //失败的话遍历失败回调函数数组然后执行这些函数
        this.onRejectCallbacks.forEach(fn => fn());

      }
    };
    //这里promise对象的主逻辑，执行executor，如果执行器出错，则捕获错误后执行reject函数
    try {
      executor(resolve,reject);
    } catch (err) {
      reject(err);
    }
  }
  //定义promise的then函数
  //then方法接收两个参数，如果状态为fulfilled,执行onFulfilled
  //如果状态为rejected,则执行onRejected
  then(onFulfilled,onRejected){
    if(this.state === 'fulfilled'){
      onFulfilled(this.value);
    };
    if(this.state === 'rejected'){
      onRejected(this.reason);
    }
    //当状态为等待态时，我们要将成功/失败的回调函数加入到对应的数组中
    if(this.state === 'pending'){
      //onFulfilled传入到成功数组
      this.onResolvedCallbacks.push(() => {
        onFulfilled(this.value);
      })
      //onRejected传入到失败数组
      this.onRejectCallbacks.push(() => {
        onRejected(this.reason);
      })
    }
  }
}





//加强版  解决链式调用
class Promise{
  //构造函数（入参是执行器，包括reslove与reject两个函数）
  constructor(executor){
    //必要的初始化，这里用到状态，值和原因三个变量
    this.state = 'pending';
    this.value = undefined;
    this.reason = undefined;  
    //成功回调函数数组和失败回调函数数组
    this.onResolvedCallbacks = [];
    this.onRejectCallbacks = [];
    //定义成功函数，入参是value
    let resolve = value => {
      //首先要判断state是否为等状态，如果不是则不做任何处理
      if(this.state === 'pending'){
        //修改状态
        this.state = 'fulfilled';
        //更新值
        this.value = value;
        //成功的话遍历成功回调函数数组然后执行这些函数
        this.onResolvedCallbacks.forEach(fn => fn());
      }
    };
    let reject = reason => {
      //同样的逻辑
      if(this.state = 'pending'){
        this.state = 'rejected';
        this.reason = reason;
        //失败的话遍历失败回调函数数组然后执行这些函数
        this.onRejectCallbacks.forEach(fn => fn());

      }
    };
    //这里promise对象的主逻辑，执行executor，如果执行器出错，则捕获错误后执行reject函数
    try {
      executor(resolve,reject);
    } catch (err) {
      reject(err);
    }
  }
  //定义promise的then函数
  //then方法接收两个参数，如果状态为fulfilled,执行onFulfilled
  //如果状态为rejected,则执行onRejected
  then(onFulfilled,onRejected){
    let promise2 = new Promise((resolve,reject) => {
      if(this.state === 'fulfilled'){
        let x = onFulfilled(this.value);
        reslovePromise(promise2,x,resolve,reject);
      };
      if(this.state === 'rejected'){
        let x = onRejected(this.reason);
        reslovePromise(promise2,x,resolve,reject);
      }
      //当状态为等待态时，我们要将成功/失败的回调函数加入到对应的数组中
      if(this.state === 'pending'){
        //onFulfilled传入到成功数组
        this.onResolvedCallbacks.push(() => {
          let x = onFulfilled(this.value);
          reslovePromise(promise2,x,resolve,reject);
        })
        //onRejected传入到失败数组
        this.onRejectCallbacks.push(() => {
          let x = onRejected(this.reason);
          reslovePromise(promise2,x,resolve,reject);
        })
      }
    })
    return promise2;
  }

  function resolvePromise(promise2,x,resolve,reject){
    if(x === promise2){
      return reject(new TypeError('Chaining cycle detected for promise'));
    }
    let called;
    if(x != null && (typeof x === 'object' || typeof x === 'function')){
      try {
        let then = x.then;
        if(typeof then === 'function'){
          then.call((x,y) => {
            if(called){
              return;
            }
            called = true;
            resolvePromise(promise2,y,resolve,reject);
          },err => {
            if(called) return;
            called = true;
            reject(err);
          })
        }else{
          resolve(x);
        }
      } catch (e) {
        if(called) return;
        called = true;
        reject(e);
      }
    }else{
      resolve(x);
    }
  }
}