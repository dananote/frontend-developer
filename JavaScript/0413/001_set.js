//✅ set
// 집합, 합집합, 교집합, 차집합
// 실무에서는 많이 사용이 안되지만
// 알고리즘 문제에서는 거의 필수로 사용되는 자료형입니다.

let s = new Set('aabbccddee');
console.log(s); //Set(5) {'a', 'b', 'c', 'd', 'e'} // 중복을 제거
s.size // 5

회사게시판 = ['이호준', '이호준', '이호준','이호준', '김연하','김연하', '최홍석', '이나영'] 
// 만약 중복되는 것들이 100개라면 중복되는 것을 어떻게 카운팅할까
// 또한 같은것들을 정렬하거나 할땐 어떻게 해야할까


// 💡 문제 1: 몇 명이 게시판에 제시물을 썼나요? (각각의 인원이 유일해야 합니다.)
let 게시자 = new Set(회사게시판) // 중복제거
게시자.size;

// 💡 문제 2: 각각 몇 개의 게시물을 작성하나요?
for(const i of 게시자) {
    console.log(i, 회사게시판.filter(e => e === i))
}

for(const i of 게시자) {
    console.log(i, 회사게시판.filter(e => e === i).length)
}

// 이 풀이는 매울 어렵 초금자분들에게 권장 하지 않음
// 👩‍💻 이름: 개수 객체 형태로 만들고 싶을때
let map2 = new Map()
for(const i of 회사게시판) {
    map2.set(i, (map.get(i) || 0) + 1)
}  // Map(4) {'이호준' => 4, '김연하' => 2, '최홍석' => 1, '이나영' => 1}

//풀이
// 1번째 순회 i에 '이호준'
map.set(i, (map.get(i) || 0) + 1)

let map = new Map()
map.get('이호준') // undefined

map.set('이호준', 1) // 최종

// 2번째 순회 i에 '이호준'
map.set(i, (map.get(i) || 0) + 1)

map.set('이호준', 2) // 최종


// 👩‍💻 set 연습

let b = new Set('aabbccddee');
b.size // 5
b.has('a'); // true
b.has('f'); // false
b.has('z'); // false

// for of 순회
for(const i of b){
    console.log(i)
} // a, b, c, d, e


// 📍 set에서 NaN은 같은것으로 취급해준다.
let 회사게시판2 = ['이호준', '이호준' , NaN, NaN] 
let test = new Set(회사게시판2) // Set(2) {'이호준', NaN}


let b2 = new Set ('aabbccddee'.split('')); // t(5) {'a', 'b', 'c', 'd', 'e'}
let b3 = new Set (['a','b','c','d','a','b','c','d']) // Set(4) {'a', 'b', 'c', 'd'}



// 📍 교집합
let a = new Set('abc') //Set(3) {'a', 'b', 'c'}
let c = new Set('cde') //Set(3) {'c', 'd', 'e'}
// 배열 a를 순회를 돌면서 b에서 a의 요소를 가지고 있는지 확인
let cro = [...a].filter(e => c.has(e)) // ['c']

// 📍 합집합
let union1 = new Set([...a].concat(...c)) // Set(5) {'a', 'b', 'c', 'd', 'e'}
let union2 = new Set([...a, ...c]) // 위에랑 같음 // Set(5) {'a', 'b', 'c', 'd', 'e'}

// 📍 차집합
let dif = [...a].filter(e => !b.has(e))



//🤔 set, map, object, array가 이터러블 객체인지? 순서는 보장하는지?
// 이터러블 객체란? 순회가 가능한 객쳉다.
// set, map, array, string

// 순서를 보장하나요? (object는 보장하지 않음)
// 넣은 순서대로 보장하는 거라면
// set, map, array, string

b3.forEach((value, value, set) =>{})
// array와 다르게 value가 2번
// foreachasms IE10 미지원
b3.forEach((a, b, set)=>{
    console.log(a, b, set)
})




// set 예제
// https://school.programmers.co.kr/learn/courses/30/lessons/120903
// 교집합의 갯수 구하는 문제


//방법1
function solution(s1, s2) {
    return s1.length + s2.length - new Set([...s1, ...s2]).size;
}


//방법2
function solution(s1, s2) {
    s1 = new Set(s1)
    s2 = new Set(s2)
    let cro = [...s1].filter(e => s2.has(e))
    return cro.length;
}



//https://school.programmers.co.kr/learn/courses/30/lessons/120891
// 369게임
function solution(order) {
    const mySet = new Set([3, 6, 9]);
    return String(order) // '29423' 
        .split("") // ['2', '9', '4', '2', '3']
        .filter((num) => mySet.has(parseInt(num))).length;
}



//https://school.programmers.co.kr/learn/courses/30/lessons/120852
// 소인수 분해

function solution(n) {
    let answer = [];

    let i = 2;
    while (i <= n) {
        if (n % i === 0) {
            answer.push(i);
            n = n / i;
        } else {
            i++;
        }
    }

    return [...new Set(answer.sort((a, b) => (a > b ? 1 : -1)))];
}