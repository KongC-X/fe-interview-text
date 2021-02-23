//防抖
function debounce(fn,delay = 500) { 
  //timer是闭包中的
  let timer = null;
  return function(){
    if(timer){
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this,arguments)
      timer = null;
    },delay)
  }
}

input1.addEventLister('keyup',debounce(function(){
  console.log(input1.value);
}),600)