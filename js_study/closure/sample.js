'use strict';

/**
 * 클로저를 왜 사용하는가?
 * 
 * - 전역변수의 남용을 막을 수 있다.
 * 		- cnt값을 증가시키기 위해 전역변수로 사용하고 싶다 -> 문제는 cnt를 직접 수정하게 되면 버그 확률이 커지고 디버깅이 어렵다
 * 		- 이런경우 cnt 변수를 직접적으로 수정할 수 없게 만들고 싶을때 사용
 * - 변수값을 은닉하는 용도로도 사용할 수 있다.
 * 
 */
function closure(){
	let cnt = 0;
	function cntPlus(){
		cnt = cnt + 1;
	}

	function printCnt(){
		console.log(cnt);
	}

	function setCnt(value){
		cnt = value;
	}
	console.log("aaaaaaa");
	return {
		cntPlus,
		printCnt,
		setCnt,
	}
}

const cntClosure = closure();
console.log(cntClosure);

cntClosure.cntPlus();
cntClosure.printCnt();			// 1

console.log(closure.cnt);		// undefined

cntClosure.setCnt(100);
cntClosure.printCnt();			// 100