//图片懒加载
//图片懒加载在一些图片密集型的网站中运用比较多，通过图片懒加载可以让一些不可视的图片不去加载，避免一次性加载过多的图片导致请求阻塞（浏览器一般对同一域名下的并发请求的连接数有限制），这样就可以提高网站的加载速度，提高用户体验。
//原理
//将页面中的img标签src指向一张小图片或者src为空，然后定义data-src（这个属性可以自定义命名，我才用data-src）属性指向真实的图片。src指向一张默认的图片，否则当src为空时也会向服务器发送一次请求。可以指向loading的地址。注意，图片要指定宽高。

let num = document.getElementsByTagName('img').length
let img = document.getElementsByTagName('img');
let n = 0; //存储图片加载到的位置，避免每次都从第一张图片开始加载

lazyload();

window.onscroll = lazyload;

function lazyload() {  //监听页面滚动事件
  let seeHeight = document.documentElement.clientHeight; //可见区域高度
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //滚动条距
  for(let i = n; i < num;i++){
    if(img[i].offsetTop < seeHeight + scrollTop){
      if(img[i].getAttribute("src") == "Go.png"){
        img[i].src = img[i].getAttribute("data-src");
      }
      n = i + 1;
    }
  }
}