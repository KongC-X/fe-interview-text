//patch(container , vnode)
function createElement(vnode) {
  let tag = vnode.tag
  let attrs = vnode.attrs || {}
  let children = vnode.children || []
  if(!tag){
    return null
  }

  //创建元素
  let elem = document.createElement(tag)
  //属性
  var attrName
  for(attrName in attrs){
    if(attrs.hasOwnProperty(attrName)){
      elem.setAttribute(attrName,attrs[attrName])
    }
  }
  //子元素
  children.forEach(childVnode => {
    //递归调用 createElement  创建子元素
    elem.appendChild(createElement(childVnode))
  })
  return elem
}



// patch(vnode , newVnode)
function updateChildren(vnode , newVnode) {
  let children = vnode.children || []
  let newChildren = newVnode.children || []

  //遍历现有的 children
  children.forEach((child , index) => {
    let newChild = newChildren[index]
    if(newChild == null){
      return 
    }
    if(child.tag === newChild.tag){
      //两者 tag 一样
      updateChildren(child , newChild)
    }else{
      //两者 tag 不一样
      replaceNode(child , newChild)
    }
  })
}