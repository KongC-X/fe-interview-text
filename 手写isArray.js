Array.MyIsArray = function (arr) {
  return Object.prototype.toString.call(Object(arr)) === '[object Array]'
}