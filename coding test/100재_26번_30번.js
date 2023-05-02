//todo 26번 행성 문제2
// 행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램

const planetE = ['Mecury', 'Venus', 'Earth', 'Mars', 'jupiter', 'Saturn', 'Uranus', 'Neptune']
const planetK = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성' ]


function solution (user){
    let index = planetK.indexOf(user);
    return planetE[index];
}


//* +) 객체로 푸는 정답
const planets = {
	'수성' : 'Mercury',
	'금성' : 'Venus',
	'지구' : 'Earth',
	'화성' : 'Mars',
	'목성' : 'Jupiter',
	'토성' : 'Saturn',
	'천왕성' : 'Uranus',
	'해왕성' : 'Neptune',
};

let user = prompt('행성을 입력해주세요');
console.log(planets[user]);


//todo 27번 객체 만들기
// 학생의 이름이 key이고 value가 수학 점수인 객체

// 먼저 풀어서 해보기
let students = ['Yujin','Hyewon'];
let grades = [70, 100];
let obj = {};

obj[students[0]] = grades[0]; // { Yujin: '70' }

// 입력된 문자열은 split("")으로 배열로 반환한 상태라는 가정하에

for(let i = 0; i < students.length; i++){
    obj[students[i]] = grades[i]
    console.log(obj)
}

//* +) reduce 로 객체만들기
// 단, 키와 값이 번갈아가면서 배열에 들어와 있어야됨
let students2= ['Yujin', 70 ,'Hyewon', 100];

students2.reduce((acc, curr, index) => {
    if (index % 2 === 0) {
        acc[curr] = students2[index + 1];
    }
    return acc
}, {})


//todo 28번 2-gram
// 2-gram이란 문자열에서 2개의 연속된 요소를 출력하는 방법

for(let i = 0; i < str.length; i++){
    if(str[i + 1] != undefined) {
        console.log(str[i], str[i + 1])
    } 
}

//* +) 문자의 길이만큼 반환하면 undefined 가 나오므로 처음부터 길이에서 -1 만큼만 반복되게 해주는 방법도 있음
for(let i = 0; i < str.length; i++){
    console.log(str[i], str[i + 1])
}


//todo 29번 대문자만 지나가세요
//알파벳 하나만을 입력하고 그 알파벳이 대문자이면 YES를 아니면 NO를 출력하는 프로그램


if(str === str.toUpperCase()){
    console.log('YES')
} else {
    console.log('NO')
}



//todo 30번 문자열 속 문자 찾기
// 첫번째 입력에서는 문자열이 입력되고, 두번째에는 찾을 문자가 입력되어야 합니다. 그 문자가 시작하는 index를 반환하는 프로그램
let str = prompt('문자를 입력해주세요')
let find = prompt('찾을 문자를 입력해주세요')

str.indexOf(find);