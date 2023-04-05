// array (🌟🌟🌟🌟🌟)

const arr = [10, 20, 30]
arr[0] = 100 // 현재 배열(회사)이 변경되는게 아님 안에 값(사원)만 변경됨
console.log(arr)
arr = [10, 20, 30] // 이건 오류가 뜸 배열 자체를(회사) 바꾸려 하기 때문에



/////////////////

const arr2 = [10, 20, 30]
console.log(arr2)
console.dir(arr2) // 프로퍼티와 메서드를 볼 수 있습니다.

// ✅ 배열 호출 방법
// 프로퍼티에 숫자로 들어간 값은 대괄호로 호출
// length는 문자입니다. 문자로 입력된 값은 .을 찍어서 호출
arr2[1] // 20
arr2.length // 3
arr2['length'] // 3

// 두개가 같은 얘기

arr2.length = 10 //[10, 20, 30, empty × 7]
arr2[0] = 100

// 프로퍼티를 추가하는 것도 가능합니다.
arr2['leehojun'] = 100 //[10, 20, 30, empty × 7, leehojun: 100]
arr2.hojun = 1000


// ✅ 배열의 특징
// let arr = []
// let arr = [1, 2, 3]
// let arr = new Array(4, 5, 6)
// let arr = new Array(3)
// Array(100).fill(0) //Array 100개를 만들건데 다 0으로 채워넣어라


// 1. 배열은 순서가 있습니다. 배열의 순서를 index, 이 순서로 호출하는 것을 indexing 이라고 합니다. 배열 안의 값을 원소(elements)라고 합니다.
const arr3 = [10, 20, 30]
arr3[0] = 100

// 2. 배열에 다른 원시타입과 객체타입을 포함할 수 있습니다.
const arr4 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
arr4[0] // [1,2,3]
// 6을 호출하고 싶을때
arr4[1][2] // 첫번째로 접근해서 그 두번째


// ✅ 0차원,1차원, 2차원, 3차원, 다차원
const a = 10 // 스칼라
const b = [10, 20, 30] // 벡터
const c = [  // 매트릭스
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
const d = [
    [[1, 2], [1, 2], [1, 2]],
    [[1, 2], [1, 2], [1, 2]],
    [[1, 2], [1, 2], [1, 2]]
] // 텐서 (3차원 이상의 다차원)
// 그렇기에 인공지능 중 가장 유명한 라이브러리 텐서플로우는 결국 다차원 행렬의 연산입니다.


//👩‍💻 배열 관련 메서드 (🌟🌟🌟🌟🌟)

arr5.push(4) // [1, 2, 3, 4]

const arr5 = [1, 2, 3]

// ✅ .push()
// 배열 맨 뒤 넣음 
arr5.push(4) // [1, 2, 3, 4]


// ✅ .pop()
// 1. 마지막 값을 꺼냄
// 2. 꺼낸 값을 반환합니다. (return) 
arr5.pop() // 5
arr5 // [1, 2, 3]


// ✅ unshift
// 배열 맨 앞 넣음
const myArray1 = ["사과", "바나나", "수박"];
myArray1.unshift("오이", "배");
console.log(myArray1); // ['오이', '배', '사과', '바나나', '수박']


// ✅ shift
// 1. 앞에서 값을 꺼내고
// 2. 꺼낸 값을 반환 합니다.
let myArray = ["사과", "바나나", "수박"];
myArray.shift(); // '사과'
myArray // ["바나나", "수박"]


// 💡 정리
// push: 배열의 마지막으로 값이 들어간다.
// pop: 마지막 값을 꺼낸 후 값을 리턴해준다. 이후 배열에선 해당값은 사라진다
// unshift: 배열의 첫번째로 값이 들어간다.
// shift: 첫번째 값을 꺼낸 후 값을 리턴해준다. 이후 배열에서 해당값은 사라진다



// ✅ .splce(start, delteCount, items)
const arr6 = [1, 2, 3]
arr6.splice(1, 0, 4) // 아무것도 삭제하지 않고 arr에서 1번째에서, 아무것도 삭세하지 않곡 4를 넘기겠다.

const arr7 = [1, 2, 3];
arr7.splice(1, 0, [10, 20, 30]); // arr에 1번째에, 아무것도 삭제하지 않고, [10, 20, 30]를 넣겠다.

const arr8 = [1, 2, 3];
arr8.splice(1, 0, ...[10, 20, 30]); // arr에 1번째에, 아무것도 삭제하지 않고, 10, 20, 30를 넣겠다.

const arr9 = [1, 2, 3];
arr9.splice(1, 0, 10, 20, 30); // arr에 1번째에, 아무것도 삭제하지 않고, 10, 20 30를 넣겠다.ㅂㄴ


// 💡 문제
// ||를 사용해서 답변해주세요.
const arr = [10, 20, 30, 40, 50]
const x = [1, 2, 3]
// 만들고 싶은 값 == [10, 1, 2, 3, 20, 30, 40, 1, 2, 3, 50]
// splice만 사용하여 위처럼 만들어주세요.
arr.splice(1, 0, ...x);
arr.splice(7, 0, ...x);

const arr = [10, 20, 30, 40, 50]
arr.splice(2, 1, 5); // arr에 2번째에, 1개를 삭제하고, 5를 넣는다.
console.log(arr); // [10, 20, 5, 40, 50]
// arr.splice().splice() // 메서드 체이닝이 안되는 이유는 splice는 arr가 아니라 삭제된 값을 반환합니다.]

const arr = [10 ,20, 30, 40, 50]
arr.splice(2, 2); // 2번째 인덱스에서 값 2개를 삭제합니다. 삽입되는 값은 없습니다.

const arr12 = [10, 20, 30]
arr12.splice(1) // 첫번째 값을 없애버림


// ✅ .slice(start, end)
const myArray2 = ["apple","banna", "cherry", "durian", "elderberry"]
console.log(myArray2.slice(1, 4)) // ['banna', 'cherry', 'durian']
console.log(myArray2)
myArray2.slice(2) // ['cherry', 'durian', 'elderberry']
myArray2.slice(0, 100) // ['apple', 'banna', 'cherry', 'durian', 'elderberry']



// 📍 forEach

const arr = [1, 2, 3, 4, 5]
// arr.forEach(함수)
// 함수(callbackfn): (value: numver, index: number, array: number[])
arr.forEach(function(item, index){
    console.log(item)
}) // 1, 2, 3, 4, 5

arr.forEach(function(item, index){
    console.log(index, item)
}) // 0 1, 1 2, 2 3, 3 4, 4 5

arr.forEach(function(item, index, arr){
    console.log(index, item, arr)
})
// 0 1 [1, 2, 3, 4, 5]
// 1 2 [1, 2, 3, 4, 5]
// 2 3 [1, 2, 3, 4, 5]
// 3 4 [1, 2, 3, 4, 5]
// 4 5 [1, 2, 3, 4, 5]

// 실무에서 사용하는 코드는 아님
const arr = Array(100).fill(0)
const arr2 = []

arr.forEach(function(item, index){
    arr2.push(index)
})

// 같은 코드1 (이름이 없는 함수 사용)
arr.forEach(function(item, index){
    arr2.push(index+1)
})

// 같은 코드2 (화살표 함수 사용)
// arr.forEach(item, index) => {
//     arr2.push(idxex+1)
// }

// 같은 코드3(중괄호를 생략한 화살표 함수 사용, 주로 이렇게 실무에서 사용)
arr.forEach((item, index) => arr2.push(index+1))

// 같은 코드4 (이럭세 사용 안함, 이름이 있는 함수 사용)
function hojun(item, index){
    arr2.push(index+1)
}
arr.forEach(hojun)

// 모드 같은 값
// (100) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99] 

const avengers = ['spiderman', 'ironman', 'hulk', 'thor'];

const newAvengers = [];
avengers.forEach(function (item) {
    newAvengers.push('💖' + item + '💖');
});

// ⚠️ foreach 주의사항 : IE 10 이상



// ✅ map (면접 질문에서도 많이 나옴. 데이터를 뽑으려고 많이 사용)
// map은 forEach와 다르게 새로운 배열을 생성합니다.

const arr = [1, 2, 3]
arr.map(function(item, index){
    return item ** 2
})

arr.map(function(x) {
    return x ** 2
})

arr.map(x => x ** 2)

const arr = Array(100).fill(0)

// 같은 코드1
const arr = Array(100).fill(0)
arr.map((v, i) => i)

// 같은 코드 2
const arr = Array(100).fill(0)
arr.map(function(v, i){
    return i
})

// 같은 코드 3
const arr = Array(100).fill(0)
function hojun(v, i){
    return i
}
arr.map(hojun)

// 같은 코드 4
const arr = Array(100).fill(0)
arr.map((v, i) => {
    return i
})


// ✅ 실무 팁
let tip1 = [1, 2, 3, 4, 5]
console.log(tip1[tip1.length-1]) // 5
// 📍 원본 수정 없이 [1, 2, 3, 4] 값과 [5]값을 얻어내고 싶을 때
console.log([...tip1].pop()) // 5 
let tip2 = [...tip1]
console.log(tip2.pop())
console.log(tip2)

let tip3 = [1, 2, 3, 4, 5]
let tip4 = [10, 20, 30, 40, 50]
console.log([...tip3, 1000, ...tip4]) 
// 전개구문, 대괄호도 사라짐 [1, 2, 3, 4, 5, 1000, 10, 20, 30, 40, 50]
// 📍 다차원 배열에서 최솟값, 최댓값 찾기
const tip6 = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
]
// 일반적인 최대값 메서드는 안됨
Math.max(tip6) // NaN
Math.max(...tip5.flat())

tip6.flat()
tip6.flat(1)
tip6.flag(2)
tip6 = flat(Infinity) // 다 펼쳐지면 수톱

const tip7 = newArrya(10).fill(0) // Array(10).fill(0)
const tip8 = Array.from('hello world')

let tip9 = [1, 2, 3, 4, 5]
console.log([tip9.slice(0, 2), 1000, tip9.slice(2, 5)])
// [Array(2), 1000, Array(3)]
console.log([...tip9.slice(0,2), 1000, ...tip9.slice(2, 5)])
// [3, 4, 5, 1000, 3, 4, 5]

let tip10 = [1, 2, 3, 4, 5]
tip10.splice(2,0,1000)
// [1, 2, 1000, 3, 4, 5]

const tip11 = Array(100).fill(0).map((v, i) => i + 1)


const tip12 = [
    {
        "_id": "642ba3980785cecff3f39a8d",
        "index": 0,
        "age": 28,
        "eyeColor": "green",
        "name": "Annette Middleton",
        "gender": "female",
        "company": "KINETICA"
    },
    {
        "_id": "642ba398d0fed6e17f2f50c9",
        "index": 1,
        "age": 37,
        "eyeColor": "green",
        "name": "Kidd Roman",
        "gender": "male",
        "company": "AUSTECH"
    },
    {
        "_id": "642ba39827d809511d00dd8d",
        "index": 2,
        "age": 39,
        "eyeColor": "brown",
        "name": "Best Ratliff",
        "gender": "male",
        "company": "PRISMATIC"
    }
]


// askup

const ages1 = tip12.map((item) => item.age);
const ages2 = tip12.map((item) => {
    return item.age
});
console.log(ages1, ages2);


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.filter(function (el) {
    return el % 2 === 0
})

function solution(n) {
    return Array(n)
        .fill()
        .map((_, i) => i + 1)
        .filter((v) => v % 2 === 0)
        .reduce((a, c) => a + c, 0);
}


const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr2.filter(function (el) {
    return el % 2 !== 0
})

// 모음 제거
Array.from('hello world').filter(v => !["a", "e", "i", "o", "u"].includes(v))

// reduce
const arr10 = [1, 2, 3, 4, 5]
arr10.reduce((a, c) => a + c, 0)

const arr11 = []
arr11.reduce((a, c) => a + c)

const arr14 = [1]
arr14.reduce((a, c) => a + c)

// 0을 항상 넣어주세요.
const arr13 = []
arr13.reduce((a, c) => a + c, 0)

// min, max도 있는데 sum이 없다?


// includes
const arr16 = ['hello', 'world', 'hojun']
arr16.includes('world')

const arr17 = ['hello', 'world', 'hojun']
arr17.includes('leehojun')

const arr18 = ['hello', 'world', 'hojun']
arr18.includes('jun')


// join
const arr19 = ['hello', 'world', 'hojun']
arr19.join('!')

const arr20 = ['010', '5044', '2903']
arr20.join('-')

const arr21 = [010, 5044, 2903]
arr21.join('-') // 이렇게 하시면 안됩니다.

// 0b100 // b는 바이너리의 첫글자입니다.
// 0o100 // o는 옥타의 첫글자입니다.
// 0x100 // x는 헥사를 표현합니다.