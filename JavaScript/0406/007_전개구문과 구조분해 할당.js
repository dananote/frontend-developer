// ✅ 전개구문

// 배열의 전개구문
const 과일들 = ['사과', '파인애플', '수박'];
const 생선들 = ['조기', '갈치', '다금바리'];
const 합치면 = [...과일들, ...생선들];
const 합치면2 = [과일들, 생선들];

console.log(합치면); 
console.log(합치면2); 

//객체의 전개구문
const 위니브1 = {개리: 1, 빙키: 2};
const 위니브2 = {라이캣: 3};
const 위니브3 = {...위니브1, ...위니브2};

console.log(위니브3);

const 위니브임직원 = {
    개리: "재직중",
    빙키: "재직중",
    라이캣: "재직중",
    뮤라: "재직중",
    해골왕: "재직중"
};

const 위니브임직원2 = {
    ...위니브임직원,
    라이캣: "휴가",
    해골왕: "퇴사"
}


// ✅ 구조분해할당

// destructuring 
for(const [i, j] of [[1, 2], [3, 4], [5, 6]]) {
    console.log(i, j)
}

const 위니브임직원3 = {
    개리: "재직중",
    빙키: "재직중",
    라이캣: "재직중",
    뮤라: "재직중",
    해골왕: "재직중"
};

Object.entries(위니브임직원3)

for(const [i, j] of Object.entries(위니브임직원3)) {
    console.log(i, j)
}


// 선언할떄도 쓸 수 있음
let[a, b] = [10, 20]
let[one, two, three] = '010-1111-1111'.split('-')
let[one2, two2, ...three2] = '010-1111-1111-123-123'.split('-')


const test = [
    [1, 2, [10, 20]],
    [3, 4, [30, 40]],
    [5, 6, [50, 60]]
]

// 반목 변수 순서: i, j, k, l
for(const [i, j, [k, l]] of test) {
    console.log(i, j, [k, l]);
}

// 🌟🌟🌟
const test2 = [
    [1, 2, 10, 20],
    [3, 4, 30, 40],
    [5, 6, 50, 60]
]

for(const [i, j, ...k] of test2) {
    console.log(i, j, k);
}

// 4월 12일 추가
Math.max(...[10, 20, 30]) //배열은 전개구문 해야 max, min 할 수 있음
Math.min(...[10, 20, 30])
Math.max(...[10, 20, 30,[11, 12, 13,[21, 21, 23]]].flat(Infinity)) // flat하고 infinity 해야함

// ❗️오류 나는 코드
Math.max([10, 20, 30])
Math.min([10, 20, 30])
Math.max([10, 20, 30,[11, 12, 13,[21, 21, 23]]])

// 자주 사용되는 코드
const s = 'hello world';
// 한자씩 넣고 싶을때
[s] // s.split  //['hello world']
[...s] // s.split('') // ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']
{...s} //  객체로 전개 구문됨
//{0: 'h', 1: 'e', 2: 'l', 3: 'l', 4: 'o', 5: ' ', 6: 'w', 7: 'o', 8: 'r', 9: 'l', 10: 'd'}