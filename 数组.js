//去重
var fruits = ["banana","apple","orange","watermelon","apple","orange"];
//方法一
var uniqueFruits = Array.from(new Set(fruits));
console.log(uniqueFruits);
//returns ["banana","apple","orange","watermelon"]
//方法二
var uniqueFruits2 = [...new Set(fruits)];
console.log(uniqueFruits2);
//returns ["banana","apple","orange","watermelon"]


//替换
fruits.splice(0,2,"potato","tomato")
//  returns ["potato","tomato","orange","watermelon","apple","orange"]


//清空数组
fruits.length = 0;
console.log(fruits);
//returns []


//数组转换成对象
var fruitsObj = {...fruits};
console.log(fruits);
//returns {0:"banana",1:"apple",2:"orange",.....}


//填充数组
var newArray = new Array(10).fill("1");
console.log(newArray);
//returns ["1","1","1","1","1","1","1","1","1","1"]


//合并数组
//方法一  concat()
//方法二  es6的...
var fruits = ["apple","banana","orange"];
var meat = ["lemon","lemon1","lemon2"];
var vegetables = ["lemon3","lemon4","lemon5"];
var food = [...fruits,...meat,...vegetables];
console.log(food);
//["apple","banana","orange","lemon","lemon1",...]


//两个数组的交集
numOne = [0,2,4,6,8,8];
var numTwo = [1,2,3,4,5,6];
var duplicatedValues = [...new Set(numOne)].filter(item => numTwo.includes(item));
console.log(duplicatedValues);
//returns [2,4,6]


//去除假值
var mixedArr = [0,"blue","",NaN,9,true,undefined,false,"white"];
var trueArr = mixedArr.filter(Boolean);
console.log(trueArr);
//returns ["blue",9,true,"white"]


//随机值
var colors = ["blue","white","red","yellow","green"];
var randomColor = colors[(Math.floor(Math.random() * (colors.length)))];


//倒序
var reverseColors = colors.reverse();
var reverseColors1 = colors.slice.reverse();


//查找元素
//indexOf()
//lastIndexOf()
var num = [1,5,2,6,3,5,2,3,6,5,2,7]
var lastIndex = num.lastIndexOf(5);
console.log(lastIndex);
//returns 9


//求和
var nums = [1,5,2,6];
var sum = nums.reduce((x,y) => x + y);
console.log(sum);
//returns 14