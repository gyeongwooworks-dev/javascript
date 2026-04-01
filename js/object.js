// 객체(Object)
// 여러 값에 이름(key)으로 묶어서 관리하는 자료 구조
// Python Dictionary와 유사

// 같은 유형의 데이터 -> 배열
//혼합되어 있는 데이터들을 이름을 붙여서 관리하고싶다 -> 객체 사용
let user = {
    name: "alex", 
    age: 40
}

console.log(user.name);
console.log(user["age"])

//값 덮어쓰기
user.name = "bob"
console.log(user.name)

console.log("=======")

// 객체의 key값 반복문 이용하여 출력
for (const key in user) {
    console.log(key);
}

console.log("=======")

for (const key in user) {
    console.log(key, user[key]);
}