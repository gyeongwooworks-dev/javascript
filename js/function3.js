// 지금까지 배운 JS 문법(조건문, 반복문, 함수 등)을 활용해는 실습


function getAverage (scores) {
    if (scores.length === 0) {
        return 0;
    };
    // 0으로 나눌수 없음 -> 값이 없으면 평균을 0으로 처리하겠다

    let sum = 0;
    for (const score of scores) {
        sum += score
    } ;
    return sum / scores.length ;
};

// 갯수 : scores.length
//  for (const score of scores) -> 배열에 있는것 하나씩 꺼내기

const scores = [80, 85, 92, 97];
const average = getAverage(scores)
console.log(average)