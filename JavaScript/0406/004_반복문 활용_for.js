for (let i = 0; i < 10; i++) {
    console.log(10)
    
}

let arr = [10, 20, 30, 40 ,50]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}



// ✅ for...in 문

// airbnb 컨벤션에 권장
// IE에서도 사용 가능
let arr1 = [10, 20, 30, 40 ,50]
let obj = {
    'one' : 10,
    'two' : 20
}

for (const i in arr1) { // i는 인덱스만 가져옴
    console.log(arr1[i])// arr의 index를 가져옴
}

for (const i in obj1) { 
    console.log(obj1[i]) // arr의 key를 가져옴
}

for(const i in 'hello world') {
    console.log(i)
}

let s = 0;
for (const i in ''.repeat(101)) { 
    s += i
}
console.log(s)


// ✅ for...of 문

// airbnb 컨벤션에 권장
// IE에서도 사용 불가능
// 객체나 배열 순회할때 사용
let arr3 = [10, 20, 30, 40, 50]
let obj3 = {'one': 10, 'two': 20}

for(const item of arr3) {
    console.log(item)
}

let s2 = 0
for(const item of arr3) {
    s2 += item
}

console.log(s)

for(const item of obj3) { // of뒤에 iterable 값이 나와야함
    console.log(item)
}

for(const item of 'helloworld') {
    console.log(item)
}

//🤔 why? for of와 for in문에서는 const가 가능할까?
// // ECMAScript 명세서 : https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-for-in-and-for-of-statements
// 정확한 이유는 없음 명세서에서 const 쓰라해서 const를 쓰는것..

for(const i = 0; i < 20; i++){
    console.log(i);
    //error
}


for(const i in [1, 2, 3]) {
    console.log(i)
}

for(const i of [1, 2, 3]) {
    console.log(i)
}




// 💡문제
// https://codingdojang.com/scode/408?answer_mode=hide

s3 = [1, 2, 3, 4, 8, 13, 17, 20 ]
for (let i = 0; i < s3.length; i++) {
    console.log(s3[i], s3[i+1])
}

for (let i = 0; i < s3.length-1; i++) { //마지막 출려값 때문에 
    console.log(s[i], s3[i+1])
}

for (let i = 1; i < s3.length; i++){
    console.log(s3[i-1],s3[i])
    console.log(s3[i] - s3[i-1])
}


// for in 으로 풀 수는 있지만 위보다 깔끔한 코드가 나오진 않음
for (const i in s3) { // 여기서 i는 문자열로 반환됨
    console.log(i)
    console.log(s3[i], s3[parseInt(i) + 1])
}



// 💡문제
// 다음 수학 점수의 평균을 구하세요.
수학점수 = [10, 99, 89, 70]
// step1
(수학점수[0] + 수학점수[1] + 수학점수[2] + 수학점수[3]) / 수학점수.length

// step2

//for in
let num = 0
for(const i in 수학점수){
    num += 수학점수[i]
}

console.log(num / 수학점수.length)


// for
for(let i = 0; i < 수학점수.length; i++) {
    num += 수학점수[i]
}

// 💡문제
// 다음 user의 나이 평균을 구하세요.
let user = [
    {
        "_id": "642e3071c61a23c70ae6076b",
        "index": 0,
        "age": 31,
        "name": "Hicks Garza",
        "gender": "male",
    },
    {
        "_id": "642e3071ecd6f90a87d64731",
        "index": 1,
        "age": 32,
        "name": "Ayers Harrington",
        "gender": "male",
    },
    {
        "_id": "642e3071cef9ddc131f047fb",
        "index": 2,
        // "age": 39,
        "name": "Lamb Adams",
        "gender": "male",
    }
]
// step. 1
(user[0]['age'] + user[1]['age'] + user[2]['age']) / user.length

// step. 2
// for ... in
let num2 = 0;
for(const i in user){
    num2 += user[i]['age']
}

console.log((num2/user.length).toFixed(2))

// for
let num3 = 0;
for(let i = 0; i < user.length; i++){
    num3 += user[i]['age']
} 

console.log((num3/user.length).toFixed(2))

// for ... of
let num4 = 0;
for(const i of user) {
    num4 += i.age
}

console.log((num4/user.length).toFixed(2))

///

let num5 = 0
for (const i of user) {
    console.log(i)
    console.log(i.age) // 마지막에 undefined
    console.log(num5) // 마지막에 102
    console.log('----------')
    s += i.age ?? 0
}
console.log((num5 / user.length).toFixed(2))

///

s = 0
for (const i of user.map((v, i) => v.age)) {
    if (!!i) {
        s += i
    }
}
console.log((s / user.length).toFixed(2))

/////
!true // false
!false // true
!!10 // true
!!1 // true
!!-1 // true
!!0 // false
!!'hello' // true
!!NaN // false
!!undefined // false
!!null // false

// 견고한 코드란?
// 1. age가 문자였다면?
// 2. age가 입력되지 않았다면?
// 3. age 필드가 없다면?(MongoDB의 경우)


// ✅ 외워야 하는 코드

user
    .map(v => v.age)
    .filter(v => !!v)
    .reudce((a, b) => a + b,0)
 // undefined, null,NaN 다 반환안ㄴ된