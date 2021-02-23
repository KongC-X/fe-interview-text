function Foo() { 
  getName = function () { alert(1); };
  return this;
}
Foo.getName = function () { alert(2); };
Foo.prototype.getName = function(){ alert(3); };
var getName = function() { alert(4); };
function getName() { alert(5); };

//请写出一下执行结果
Foo.getName();  // 2
getName();   // 4  是 4 不是 5 ，因为函数声明提升，函数表达式覆盖了函数声明
Foo().getName();  // 1   window在调用Foo()函数，所以this的指向是window
getName();   // 1   Foo执行后把全局的getName函数给重写了一次
new Foo.getName();  //  2  将getName函数作为了构造函数来执行，所以弹出 2
new Foo().getName();   // 3  由于返回的是this，而this在构造函数中本来就代表当前实例化对象，最终Foo函数返回实例化对象。
//之后调用实例化对象的getName函数，因为在Foo构造函数中没有为实例化对象添加任何属性，当前对象的原型对象(prototype)中寻找getName函数。
//拓展：如果构造函数和原型链都有相同的方法，如下面的代码，那么默认会拿构造函数的公有方法而不是原型链
new new Foo().getName();   // 3   //先初始化Foo的实例化对象，然后将其原型上的getName函数作为构造函数再次new，所以最终结果为3
