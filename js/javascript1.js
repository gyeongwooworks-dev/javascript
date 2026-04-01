// 연산자와 조건문을 활용해 콘솔 계산기 만들기 실습 진행!
let number1 = prompt("첫번째 숫자를 입력하세요");
let operator = prompt("연산자를 입력하세요")
let number2 = prompt("두번째 숫자를 입력하세요");

let num1 = Number(number1); // 문자열을 숫자로 변환
let num2 = Number(number2)


if (isNaN(num1) || isNaN(num2)) {
    console.log("숫자를 입력해주세요")
} else if (operator === "/" && num2 === 0) {
    console.log("0으로 나눌수 없습니다.")
} else if (operator === "+") {
    console.log(num1 + num2)
} else if (operator === "-") {
    console.log(num1 - num2)
} else if (operator === "*") {
    console.log(num1 * num2)
} else if (operator === "/") {
    console.log(num1 / num2)
} else {
    console.log("+ - * / 연산자를 입력해주세요")
}