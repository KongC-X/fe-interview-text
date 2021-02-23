function create(Fn) {
  let F = function () {  }
  F.prototype = Fn
  return new F()
}

