'use strict';


// let arr = [10, 20, 30, 40, 50]
// let a, b, rest;
// a = arr[0];
// b = arr[1];

// console.log(a);
// console.log(b);




//======================================
/*
 * 위의 배열을 아래와 같이 구조분해를 할 수 있다.
 */ 
// let arr = [10, 20, 30, 40, 50]
// let a, b, rest;
// [a, b] = arr;
// console.log(a);
// console.log(b);
/*
output : 
10 
20
*/



//========================================
// let arr = [10, 20, 30, 40, 50]
// let a, b, rest;
// [a, , b] = arr;
// console.log(a);
// console.log(b);
/*
output :
10
30
*/


//========================================
// let arr = [10, 20, 30, 40, 50]
// let a, b, rest;
// [a, b, ...rest] = arr;
// console.log(a);
// console.log(b);
// console.log(rest)

/*
output :
10
30
[30,40,50]
*/


//=========================================
// const obj = {a:10, b:20, c:30, d:40, e:50};
// let a = obj.a;
// let c = obj.c;

// console.log(a);     
//  console.log(c);



//=========================================
// const obj = {a:10, b:20, c:30, d:40, e:50};
// let {a, c, ...rest} = obj;
// console.log(a);     
// console.log(c);
// console.log(rest);
/*
output :
10
30
{b: 20, d: 40, e: 50}
*/



//=========================================
let {a:newA, c, f:newF=60, ...rest} = {a:10, b:20, c:30, d:40, e:50};
console.log(a);     
console.log(newA);     
console.log(c);
console.log(newF);
console.log(rest);
/*
output : 
10
30
{b: 20, d: 40, e: 50}
*/

//=========================================
// let {a:newA, f:newF=60, ...rest} = {a:10, b:20, c:30, d:40, e:50};
// console.log(newA);     
// console.log(c);
// console.log(rest);