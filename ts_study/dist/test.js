"use strict";
// const message: string = 'hello world';
// console.log(message);
// 기본
let decimal = 6; // 숫자(Number)  
let color = "blue"; // 문자열(String)
// 배열
let list = [1, 2, 3]; // 배열1 
let list2 = [1, 2, 3]; // 배열2
// 튜플 (Tuple)
let tuple1;
tuple1 = ["hello", 10];
console.log(tuple1[0]); // hello
// 열거(enum)
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
console.log(c);
