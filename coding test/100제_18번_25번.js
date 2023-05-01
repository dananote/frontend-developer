//todo 18번. 평균 점수
// 공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요. 단, 소숫점 자리는 모두 버립니다.


// 일단 하나씩 풀어서 해보기
const grade = prompt('공백을 나누어 성적을 입력해주세요');
const arr = grade.split(' ');
const arrnum = arr.map(el => parseInt(el));
const result = arrnum.reduce((a, b) => a + b,0) / arrnum.length;
console.log(Mathfloor(result));


// 조금 줄이기
const grade2 = prompt('공백을 나누어 성적을 입력해주세요').split(' ');
const result2 = grade2.reduce((a,b) => a + parseInt(b) , 0) /grade2.length;

console.log(Mathfloor(result));


// for 문
const grade3 = prompt('공백을 나누어 성적을 입력해주세요').split(' ');
let sum = 0;

for(let i = 0; i < grade3.length; i++) {
    sum += parseInt(a[i]);
}
console.log(Math.floor(sum / a.length));


//todo 19번. 제곱을 구하자
// 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.

const num = '3 3'.split(' ');
let sum2 = 1;


for(let i = 0; i < parseInt(num[1]); i++){
    sum2 *= num[0];
}

//* 새로 배운 메서드 Math.pow() 첫번째 인수를 두번째 인수의 수만큼 반복하여 곱해줌

Math.pow(parseInt(num[0]), parseInt(num[1]));


//todo 20번. 몫과 나머지
// 공백으로 구분하여 두 숫자가 주어집니다. 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.

// 일단 나눠서 풀어보기
const num2 = [10, 2]
const arr3 = []

arr3.push(num2[0] / num2[1])
arr3.push(num2[0] % num2[1])

arr3.join(" ")

// 다시 합쳐보자 함수로 합쳐봄

function solution (num) {
    let number = num.map(el => parseInt(el))
    arr.push(number[0] / number[1])
    arr.push(number[0] % number[1])
    return arr.join(' ')
}

const a = prompt('공백을 나누어 숫자를 입력해주세요').split(' ');
solution(a)


//todo 21번. set은 어떻게 만드나요?
//* set() 은 중복된걸 없앰(유일한 값을 저장)

// 다음 중 set을 만드는 방법으로 올바른 것을 모두 고르시오.
// 1)  var x = {1, 2, 3, 5, 6, 7};
// 2)  var x = {};
// 3)  var x = new Set('javascript');
// 4)  var x = new Set(range(5));
// 5)  var x = new Set();


//todo 22번. 배수인지 확인하기

// 다음 중 변수 i가 6의 배수인지 확인하는 방법으로 올바른 것은?
// 1)  i / 6 == 0  // 나누기 연산자로 나오는 값은 몫이 반환됨 i가 0이어야만 0반환
//* 2)  i % 6 == 0 // 나머지 연산자로 i % 6의 나머지가 0이 되려면 6의 배수밖에 없음
// 3)  i & 6 == 0  // AND(비트) 연산자 이진수를 한자리씩 비트 연산하여 1과 1일만 1, 나머진 0
// 4)  i | 6 == 0 // or(비트) 연산자 이진수를 한자리씩 비트 연산하여  0과 0일때만 0 나머진 1
// 5)  i // 6 == 0 // 파이썬 연산자로 정수의 몫 



//todo 23번. OX문제
// console.log(10/3)의 출력 결과는 3이다. 

//! X ..?  3.333333.. 이렇게 출력되지 않을까 아 그럼 무한이니까 infinity 가 반환되겠다!
//* 3.3333333333333335  끊어지네 왜지 부동소수랑 관련이 있는것 같은..



//todo 24번. 대문자로 바꿔주세요!
// 이름이 입력되면 전부 대문자로 출력되는 프로그램


function solution(str) {
    return str.toUpperCase();
}

// 반대로 전부다 소문자로 바꾸는 메서드는
function solution(str) {
    return str.toLowerCase();
}


//todo 25번. 원의 넓이를 구하세요
// 원의 넓이는 반지름의 길이 x 반지름의 길이 x 3.14로 구할 수 있습니다
// 입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수

function solution (n) {
    return n * n * 3.14
}


