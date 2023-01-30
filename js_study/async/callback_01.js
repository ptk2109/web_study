'use strict';

/**
 * 학습목표
 * 		- 콜백을 이해하자! : 콜백함수란 파라미터로 함수를 전달하는 함수
 */



//===================================================
// 콜백함수의 기본개념
function getUserName(id, callback)
{
		let name = "찰스";   // 비동기 통신으로 id에 해당하는 이름을 가져왔다고 가정하자!

		// foo 인자로 받은 함수를 호출한다. (메모리를 호출하는거겠지?)
    callback(`${id}의 이름 = ${name}`);  
}

getUserName( "user01", function(msg){
	 console.log(msg) 
});

getUserName( "user02", (msg) => console.log(msg) );



//===================================================
// 자바스크립트 동기적인 아이이다. 
console.log("1");
setTimeout(() => {
	console.log("2");
}, 0);
console.log("3");
// 출력 : 1 3 2  <- setTimeout은 큐에 의한 것이라서 뒤에 출력된다. 



//===================================================
// 즉각실행하는 동기(Synchronous) 콜백
function printImmediately(print){
	print();
}

printImmediately(() => console.log("hello"));



//===================================================
// 언제 실행될지 모르는 비동기(Asynchronous) 콜백
function printWithDelay(print, timeout){
	setTimeout(print, timeout);
}
printWithDelay(()=>console.log("async callback"), 2000);



//===================================================
// 콜백지옥을 만들어보자
class UserStorage{
	// 로그인하는 메서드
	loginUser(id, password, onSucess, onError){
		setTimeout(() => {
			if(
				id === "user" && password === "user" ||
				id === "admin" && password === "admin"
			){
				onSucess(id);
			}else{
				onError(new Error("not found"));
			}
		}, 2000);
	}

	// 사용자 역할 가져오는 메서드
	getRoles(user, onSucess, onError){
		setTimeout(() => {
			if(user  === "admin"){
				onSucess({name:"관리자", role:"관리하는 사람"});
			}else{
				onError(new Error("no access"));
			}
		}, 1000);
	}
}

const userStorage = new UserStorage();
userStorage.loginUser(
	"admin", 
	"admin", 
	user => {
		userStorage.getRoles(
			user, 
			userWithRoe => {
				alert(`id = ${userWithRoe.name} / role = ${userWithRoe.role}`);
			},
			error => {
				console.log(error);
			}
		);
	},
	error => {
		console.log(error);
	}
);