let vnode = h('ul#list', {} , [
  h('li.list', {} , 'Item1'),
  h('li.list', {} , 'Item2')
])


{
  tag : 'ul';
  attrs : {
    id : 'list'
  };
  children : [
    {
      tag : 'li',
      attrs : { className : 'item' } , 
      children : [ 'Item1' ]
    },
    {
      tag : 'li',
      attrs : { className : 'item' } , 
      children : [ 'Item2' ]
    }
  ]
}