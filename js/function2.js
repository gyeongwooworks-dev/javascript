// 함수를 값처럼 다룰 수 있음
// 1) 함수를 변수에 할당 할 수 있다 

// y = 2x + 1 -> 함수 정의
// f(x) = 2x + 1 
// f(5) = 11 -> 함수 호출

// 함수 정의 - 매개변수 지정안함 -> 호출 시 입력값 안 넘겨도 됨
// 설명서/설계도
function sayHello() {
    console.log("Hello");
}; 

// 호출 -> 기능을 실제로 사용
sayHello();

//함수 -> 기능 그 자체
// sayHello

console.log(sayHello);   

//1) 함수 자체를 변수에 할당 할 수 있음
const f = sayHello
console.log(f)

f();

// 2) 함수를 다른 함수의 인자로 전달할 수 있다
// run이라는 함수안에서 전달된 fn이라는 함수 작동
function run(fn) {
	console.log("start function run...")
    fn();
    console.log("end function run...")
}

// run 함수를 호출 -> fn 자리에 sayHello 함수 전달
// run안에서 sayHello가 호출 
//sayHello가 다른 함수에 의해 실행됨

run(sayHello);

run(sayHello());
/*
run(sayHello());

sayHello() 함수에서 -> hello 출력
다음 return에 undefined 
* return이 없으면 undefined 반환
undefined는 호출 안됨

그럼 run에 run(undefined)하는 거랑 똑같음
-> 에러남
*/


// 기본 : 함수를 선언한 곳에서 직접 호출
// 응용 : 함수를 선언한 곳과 호출하는 곳이 달라짐
