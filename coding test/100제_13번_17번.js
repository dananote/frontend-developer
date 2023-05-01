//todo 몇 번째 행성인가요?
// 우리 태양계를 이루고 있는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성으로 총 8개 입니다. 저희는 우리 태양계의 n번째 행성이 무엇인지 알고 싶습니다.

//* 함수를 이용한 풀이
const solar = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];

function solarSystem(number) {
    return solar[number - 1];
}

//* 사용자에게 입력된다면
let num = prompt('숫자를 입력해주세요')

if(num > 0 && num < 10) {
    console.log(solar[num - 1])
} else {
    console.log('1부터 9까지의 숫자만 입력해주세요')
}



//todo 3의 배수인가요?
// 입력으로 랜덤한 숫자 n이 주어집니다. 만약 그 수가 3의 배수라면 '짝'이라는 글자를, 3의 배수가 아니라면 n을 그대로 출력
let n = prompt('숫자를 입력해주세요')
if(n % 3 === 0) {
    console.log('짝')
} else {
    console.log(n)
}


//todo 자기소개
// 만약 입력으로 김다정이라는 이름이 주어지면 "안녕하세요. 저는 김다정입니다."라고 출력하게 해주세요.

let name = prompt('이름을 입력해주세요')
console.log(`안녕하세요 제 이름은 ${name} 입니다.`)



//todo 로꾸거
// 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

let str = prompt('문자를 입력해주세요')
console.log(str.split('').reverse().join(''))

//* 굳이 push 사용해보기
function reverse(str) {
    let arr = [];
    let strArr = str.split('')
    for(let i = strArr.length - 1; i >= 0; i--) {
        arr.push(strArr[i])
    }
    return arr.join('')
}



//todo 놀이기구 키 제한
// 입력으로 키가 주어지면 키가 150이상 이면 YES를 틀리면 NO를 출력하는 프로그램을 작성하세요.

let height = prompt('키를 입력해주세요')

if(height >= 150){
    console.log('YES')
} else {
    console.log('NO')
}