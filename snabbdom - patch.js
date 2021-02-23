let vnode = h('ul#list', {} , [
  h('li.list', {} , 'Item1'),
  h('li.list', {} , 'Item2')
])


let container = document.getElementById('container')
patch(container , vnode)

//模拟改变
let btnChange = document.getElementById('btnChange')
btnChange.addEventListener('click', function () {
  let newVnode = h('ul#list', {} , [
    h('li.item', {} , 'Item 111'),
    h('li.item', {} , 'Item 222'),
    h('li.item', {} , 'Item 333')
  ])
  patch(vnode , newVnode)
})
