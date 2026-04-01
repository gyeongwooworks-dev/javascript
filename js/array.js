// 배열 (Array)
// Python : 리스트(List)

//             0,  1,   2  - 인덱스 부여
let numbers = [10, 20, 30];

console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);

//python : [-1] -> 마지막 요소
// 음수 지원 X -> at함수 사용
console.log(numbers.at(-1));

// // // 배열의 원소 갯수 -1 -> 마지막 인덱스 (배열의 원소 갯수가 >= 1)
console.log(numbers[numbers.length - 1]);

// //python : [3] -> IndexError
console.log(numbers[3]);

console.log ("==============");


let scores = [82, 95, 77]
for (const score of scores) {
    console.log (score) ;
}

let scores1 = [82, 95, 77]
for (const [i,score] of scores.entries()) {
    console.log (i + "번째 요소의 값: " + score) ;
}

// 다양한 데이터 타입을 혼합해서 사용하는 것도 가능
let data = ["hello", 100, true];