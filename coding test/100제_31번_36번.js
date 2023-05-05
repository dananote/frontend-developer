//todo 31번 자바스크립트 자료형의 복잡도
// 다음 배열 내장함수의 시간 복잡도가 O(1)이 아닌 것
// 시간 복잡도란 알고리이 수행하는데 소요되는 연산 횟수

// O(1) 은 입력 공간에 대해 변하지 않음(상수의 시간) 대표적인 예: 인덱스로 배열에 접근
// O(n) 은 n번의 연산을 수행해야 하는것 (선형 시간) 대표적인 예; for문
// O(n^2) 은 2차 시간으로 O(n^3)은 3차 시간이다 대표적인 예: 2중, 3중 for문
// O(log n)로그 시간 복잡도를 지닌 알고리즘에는 2의 2승 부터 n승까지의 항목들을 출력 

// 1)  arr[i] // 바로 출력
// 2)  arr.push(5) // 5밀어 넣고 출력
//* 3)  arr.slice() 배열의 인덱스 숫자를 세고 그만큼 잘라서 새로운 배열에 반환
// 4)  arr.pop() // 가장 뒤에 있는것을 제거하고 출력
//* 5)  arr.includes(5) // 배열에 5가 있는지 확인을 한 후 boolean 으로 출력



//todo 32번 문자열 만들기
// 문자열을 입력받으면 단어의 갯수를 출력하는 프로그램

const str = prompt('자기소개서를 입력해주세요');
const strLeng = str.split(" ");

console.log(strLeng.length);


//todo 33번 거꾸로 출력하기

const num = prompt('숫자를 순서대로 입력해주세요')

// 메서드 체이닝으로
num.split('').reverse().join('')


// for문으로
let reverseNum = "";

for(let i = num.length - 1; i >= 0; i--){
    reverseNum = num[i] + ' ' + reverseNum
}

console.log(reverseNum)

//todo 34번 sort 구현하기
// 키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램

const tall = prompt('키 순서대로 입력해주세요').split(' ');
const checkTall = tall.sort((a, b) => a - b);

if(tall === checkTall) {
    console.log('YES')
} else {
    console.log('NO')
}


//* +) 나경님 풀이
const input = prompt('키를 공백으로 구분하여 입력하세요.').split(' ');
const check = [...input].sort(function(a, b){
    return a-b;
});
let result = 'YES';
for (let i = 0; i < check.length; i++) {
    if (check[i] !== input[i]) {
        result = 'NO';
        break;
    }
}
console.log(result);
// check에서 input.sort로 하니까 원본 배열에도 변화가 생김 -> spread 처리
// input과 check는 배열이라 둘을 비교연산자로 비교하면 배열의 참조를 비교함. for문으로 요소를 하나하나 비교
// 배열을 다 비교하면 효율이 떨어지니까 값이 다른 인덱스를 찾으면 result에 NO를 넣고 break

//* +) 승표님 풀이 시간 복잡도를 생각하여 풀기
// sort 구현하기
// 민주는 체육부장으로 체육시간이 되면 반 친구들이 제대로 키 순서대로 모였는지를 확인해야 한다. 그런데 요즘 민주는 그것이 너무 번거롭게 느껴져 한 번에 확인하고 싶어한다.
// 민주를 위해 **키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램**을 작성해보자.
// (키는 공백으로 구분하여 입력됩니다.)

let input = prompt('반 친구들의 키를 입력하세요.( 구분: 공백 )');
let inputArr = input.split(' ').map((el) => parseInt(el));
let flag = 0;
for (let i = 0; i < inputArr.length - 1; i++) {
  if (inputArr[i] > inputArr[i + 1]) flag++;
  if(flag===1) break;
}
if (!flag) {
  console.log('YES');
} else console.log('NO');


//todo 35번 Factory 함수 사용하기
// 2제곱, 3제곱, 4제곱을 할 수 있는 Factory 함수 <pass>에 코드를 작성하여 two함수를 완성하세요.
//Math.pow 첫번째 인자를 두번쨰 인자 수만큼 제곱해주는 메서드

function one(n){
    function two(num){
        let result = Math.pow(num ,n)
        return result
    }
    return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));


//todo 36번 구구단 출력하기
// 1~9까지의 숫자 중 하나를 입력하면 그 단의 구구단 결과를 한 줄에 출력하는 프로그램을 작성하세요.

let n = parseInt(prompt('구구단을 출력할 숫자를 입력하세요'));
let arr = [];

for(let i = 1; i <= 9; i++){
    arr.push(n * i)
}

arr.join(' ')

// trim() : 공백 제거해주는 함수
// trimStart()
// trimEnd()