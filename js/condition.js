// Python: if / elif / else
    // If is_student;  // if 뒤에 조건식이 와야 함
// JS : if (조건식) {} if / else if / else

//JS: if/ else if / else-> 결과: true flase로 boolean 형태로 반환됨 
//  첫번째 조건이 실행되면 1f문을 탈출하게 됨. 즉 1f문이 실행되면 다음 else 1f문은 실행되지 않음

let age = 20;

if (age >= 19) {
    console.log("성인");    
} else if (age>= 8) {
    console.log("학생")
} else {
    console.log("어린이");
}


// true로 판단되는 값: 50, 1, -1, 100", "0"
// false로 판단되는 값: false, 0, "", null, undefinde, NaN


let score = -1;

if (score) {
console.log("점수: " + score);
} else {
console.log("점수 없음") ;
};