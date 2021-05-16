// // function person () {
// //   var dados = {
// //     name: 'Glauber',
// //     lastName: 'Lira'
// //   }
// //   return dados;
// // }

// // console.log(person());
// // console.log(person().name);
// // console.log(person().lastName);

// // function add(x) {
// //   return function add2 (y) {
// //     return x + y;
// //   }
// //   return add2;
// // }

// // // var addFunc = add(2);
// // console.log(add(2)(5));

// // var car = {
// //   color: 'Red'
// // }
// // function getColorCar (myCar) {
// //   return myCar.color;
// // }

// // console.log(getColorCar(car));

// // function showOtherFunction (func) {
// //   return func();
// // }

// // console.log(showOtherFunction(function(){
// //   return 'Functional JS by Ninja';
// // }));

// function myFunction () {
//   var num1 = 3;
//   var num2 = 2;
//   return sumNumbers();
//   function sumNumbers () {
//     return num1 + num2;
//   }
// }
// console.log(myFunction());

// //Função auto-executável - IIFE
// var sum = function () {
//   return 1 + 8;
// }
// console.log(sum());

// var obj = {
//   prop: function (){
//     return 2+5;
//   }
// }
// console.log(obj);
// console.log(obj.prop());


// var obj = {
//   prop: function (x,y) {
//     return x * y;
//   }
// }
// console.log(obj.prop(2,3));

var name = new String("Glauber");

console.log(typeof name);
console.log(typeof 10);
console.log(typeof true);
console.log(typeof null);