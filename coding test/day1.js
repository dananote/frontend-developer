//todo 두 수의 합
// -50000 ≤ num1 ≤ 50000
// -50000 ≤ num2 ≤ 50000
//🤔 제한사항이 있는데 이 두 수에 대한 조건값을 넣지 않아도 통과를 했다. 현재 자스에서 표현할 수 있는 최대값인 걸까?


//* 함수 선언문
function solution(num1, num2){
    return num1 + num2;
}

//* 함수 표현식
let solution = function (num1, num2){
    return num1 + num2;
}

//* 화살표 함수
let solution = (num1, num2) => num1 + num2;

// -------------------------------------------------------------------

//todo 두 수의 차


//* 함수 선언문
function solution (num1, num2){
    return num1 - num2;
}


//* 함수 표현식
let solution = function (num1, num2){
    return num1 - num2;
}


//* 화살표 함수
let solution = (num1, num2) => num1 - num2;


// -------------------------------------------------------------------

//todo 두 수의 곱

//! 오답
function solution(num1, num2) {
    if((num1 >= 0) || (num1 <= 100)){
        num1 = a;
    }
    if((num2 >= 0) && (num2 <= 100)){
        num1 = b;
    }

    return a * b

}

solution(2, 3) // a is not defind

//🤔 왜지.. 왜 a를 찾을수 없다고 할까


//* 함수 선언문
function solution(num1, num2){
    if(num1 >= 0 && num1 <= 100){
        if(num2 >= 0 && num2 <= 100){
            return num1 * num2;
        };
    };
}


//* 함수 표현식
let solution = function(num1, num2){
    if(num1 >= 0 && num1 <= 100){
        if(num2 >= 0 && num2 <= 100){
            return num1 * num2;
        };
    };
}


//* 화살표 함수
let solution = (num1, num2) => {
    if(num1 >= 0 && num1 <= 100){
        if(num2 >= 0 && num2 <= 100){
            return num1 * num2;
        };
    };
}

// -------------------------------------------------------------------

//todo 몫 구하기

//* 함수 선언문
function solution(num1, num2) {
    let answer = num1 / num2;
    return parseInt(answer);
}


//* 함수 표현식
let solution = function (num1, num2){
    return parseInt(num1 / num2);
}


//* 화살표 함수
let solution = (num1, num2) => parseInt(num1 / num2);



