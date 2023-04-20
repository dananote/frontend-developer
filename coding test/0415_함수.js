// 사용자에게 이름을 받고 그 이름으로 환영인사하는 함수
// 이름을 입력했을 경우와 입력하지 않았을 경우를 생각

function user(name){
    let newName = name || 'friend';
    let msg = `hello, ${newName}`;
    alert(msg);
}

user(prompt('이름을 입력해주세요'));



// 화살표 함수 예제1
// 함수 선언문
function showError(){
    console.log('에러입니다');
}

// 함수 표현식
let showError = function(){
    console.log('에러입니다');
}

//화살표 함수
let showError = () => {
    console.log('에러입니다');
}

showError();



// 화살표 함수 예제2
// 함수 선언문
function showHello(name){
    const msg = `hello, ${name}`;
    return msg;
}

// 함수 표현식
let showHello = function(name){
    const msg = `hello, ${name}`;
    return msg;
}

// 화살표 함수
let showHello = name => {
    const msg = `hello, ${name}`;
    return name;
}

showHello('danna');


// 화살표 함수 예제3
// 함수 선언문
function add (num1, num2){
    const result = num1 + num2;
    return result;
}

// 함수 표현식
let add = function(num1, num2) {
    const result = num1 + num2;
    return result;
}

// 실행 코드 한 줄로 줄이기
let add = function(num1, num2) {
    return num1 + num2;
}

// 화살표 함수
let add = (num1, num2) => num1 + num2;

add(1, 3);