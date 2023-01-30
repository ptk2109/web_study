'use strict';

/**
 * 학습목표
 * 		- 프로미스(promise)를 이해한다. (<= 무찌르자 콜백지옥!!)
 */

//====================================================================
// promise는 비동기적를 할때 유용하게 사용된다. 
// 상태 : pendding(대기) -> fulfilled(완료) or rejected(실패)
// Producer vs Consumer

// 1. Producer : 즉, promise는 만드는 행위
//	resolve : then의 콜백함수
const promise = new Promise( (resolve, reject) =>{
	// 프로미스를  만드는 순간 안의 내용은 실행된다. 
	console.log("대기!!!");		
	setTimeout(() => {
		resolve("정상 수행됨!!");				// 정상적으로 수행했다면 resolve를 사용하면 되고. 
		// reject(new Error("에러 났음!!"));		// 실패 했다면 reject를 사용하면 된다. 
	}, 2000);
});


// 2. Consumer : then, catch, finally 를 이용할 수 있음. 
promise
	.then( (value) => {		// 값이 정상적으로 수행된다면(then) 콜백함수의 안의 내용을 실행해라.
		console.log("1");
		console.log("A : ", value);
	})
	.catch(error => {			// 실패인 경우 안의 내용을 실행해라. 
		console.log(error);
	})
	.finally(() => {		// 실패이든 정상수행이든 안의 내용을 실행해라. 
		console.log("finally");
	})
	;


// 3. 프로미스 체이닝(Promise chaining)
const fetchNumber = new Promise( (resolve, reject) =>{
	setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num *2)		// 1*2 = 2
.then(num => num *3)		// 2*3 = 6
.then(num => {					// 6
	return new Promise(	(resolve, reject) => {
		setTimeout(() => resolve(num -1), 1000);		// 6-1 = 5
	})
})
.then(num => console.log(num));			// 즉, num = 5


// 4. 에러 핸들링