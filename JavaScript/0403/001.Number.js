let n1 = 10000;
let n2 = 10.123123;
let n3 = 31;
let n4 = 1001;
let n5 = 1111;

let s1 = '10000000000';
let s2 = '100,000,000,000';

console.log(parseInt(n3, 2)); // NaN 출력
console.log(parseInt(n4, 2)); // 9출력 , 2진법으로 된 숫자를 10진법으로 바꿈
console.log(parseInt(n4, 8)); // 513 출력, 8진법으로 된 숫자를 10진법으로 바꿈
console.log(parseInt(n4, 10)); // 1001 출력, 10진법으로 된 숫자를 10진법으로

console.log(parseInt(n2)); //소수점 없애기 권장
console.log(~~n2); //소수점이 없애지긴 하나 안정하진 않은 방법

console.log(n2.toFixed(3)) // 10.123 소수점 3자리까지 자름 ****

///////////////////////

console.log(Number(true)) // 1
console.log(Number(false)) // 0

console.log(parseInt(true)) // NaN
console.log(parseInt(false)) // NaN

///////////////////////

console.log(Number(" ")) // 0
console.log(Number("")) // 0
console.log(Number("hello")) // NaN
console.log(Number("10 20")) // NaN
console.log(Number("10abc")) // NaN

// 권장
// 텍스트가 숫자로 시작하지 않을때 NaN
// 텍스트가 숫자로 시작했을 경우 숫자까지만 변환 가능
//Int 는 정수 변환, Float는 실수 변환
console.log(parseInt(" ")) // NaN **
console.log(parseInt("")) // NaN **
console.log(parseInt("hello")) // NaN
console.log(parseInt("10 20")) // 10
console.log(parseInt("10abc")) // 10 *****
console.log(parseFloat("10.123")) // 10.123

///////////////////////

// console.log(Number(10 20)) // error
console.log(Number("    10")) // 10
console.log(Number("10    ")) // 10
console.log(Number("    10    ")) // 10

console.log(parseInt("    10")) // 10
console.log(parseInt("10    ")) // 10
console.log(parseInt("    10    ")) // 10


///////////////////////

// Infinity (기억 안해도 됨)
Infinity // 어떤수인지 모를때 비교를 위해 사용
Infinity > 100 // true
Infinity < 100 // false
Infinity - Infinity // NaN


// Math ****
Math.abs(-10) // 절대값, 10 반환
Math.ceil(10.3) // 올림, 11 반환
Math.floor(10.3) // 내림, 10 반환
Math.round(10.5) // 반올림, 11 반환
Math.round(10.4) // 반올림, 10 반환
Math.sqrt(100) // square root 루트, 10 반환
Math.PI // 3.1415926535897
Math.min(1, 3, 5, 6, 7, 23, 9) // 제일 작은 수 , 1
Math.max(1, 3, 5, 6, 7, 23, 9) // 제일 큰 수, 23

Math.min([1, 2, 3, 4, 5]) // 대괄호 안에서 작동안됨, NaN 반환
Math.min(...[1, 2, 3, 4, 5]) //  이렇게 사용 가능 '...' 전개 구문은 뒤에서 배움, 1 반환

let values = [1, 2, 3, 4, 5]
let values2 = [6, 7, 8, 9, 10]
Math.max(...values) // 5반환
Math.max(...values, ...values2) // 10반환

// 0 이상 1 미만 숫자
Math.random()

// 1 ~ 10 까지 난수 생성
parseInt(Math.random() * 10 + 1)

// Math roandom 최솟값, 최댓값 지정
// (Math.random() * (최댓값 - 최솟값)) + 최솟값

// 아래와 같이 있으나, 잘 사용되지 않는 메서드들이 있다.
Math.pow(2, 3) // 2 ** 3

///////////////////////

// 부동소수점이 일어나는 이유
// computer에서 10진수 연산이 정확하지 않음
// 결론은 computer dlqwkddptj 0.1 은 무한수 이다.
// 반복문을 할 때 안에 0.1 씩 증가하는 코드를 작성하게 된다면, 예측 불가능한  값이 생성이 된다는것을 인지하자!

// 0.3 에서만 문제가 생김
// 0.1 + 0.2  // (0.1씩 늘어갈 때) 0.30000000000000004
// 0.1 * 3  // 0.30000000000000004
// 0.3 + 0.6  //0.8999999999999999


        // 부동소수점
        // Computer에서 10진수 연산은 정확하지 않습니다.
        // 결론은 0.1이 Computer 입장에서 무한수다!
        // 반복문 안에 0.1씩 증가하는 코드를 혹시 작성하게 된다면, 예측 불가한 값이 생성이 된다는 것을 '인지'해주세요.
        // 0.1 + 0.2 (0.1씩 늘어갈 때)
        // 0.30000000000000004
        // 0.1 * 3
        // 0.30000000000000004
        // 0.3 + 0.6
        // 0.8999999999999999

// 문제가 되는 경우
let width = 0.3;
let height = 0.6;
if (width + height >= 0.9){
    console.log('실행해!') //실행되지 않음 우리가 예상하는 결과값이 나오지 않음
}

    ///////////////////////

// BigInt ***
// JS에서 큰 숫자를 사용할 때에는 BigInt를 사용합니다.
// BigInt를 여러분 회사에서 사용하지 않을 수도 있습니다.(추가된지 2년 되었습니다.)
// The proposal belongs to ECMAScript 2020, which is the 11th edition
// console.log(Number.MAX_SAFE_INTEGER)  // 2^53 - 1

// 서비스는 항상 최악의 상황, 악성 유저에 대비를 하셔야합니다.
// 아래처럼 정상 작동이 되지 않는 경우들이 있음
2 ** 53 - 1 //9007199254740991
9007199254740991 + 1 //9007199254740992
9007199254740991 + 2 //9007199254740992
9007199254740991 + 3 //9007199254740994
9007199254740991 + 4 //9007199254740996

// 해결법 
// n 붙이기
9007199254740991n + 1n //9007199254740992n
9007199254740991n + 3n //9007199254740994n

//BigInt 사용
BigInt(9007199254740991) + BigInt(1) //9007199254740992n
BigInt(9007199254740991) + BigInt(3) //9007199254740994n

//참고사항
BigInt(5) + 5n // 10n
BigInt(5) + 5 // error
BigInt(5) / 2n // 2n (소수표현안됨)큰 값을 정수로 입력받을 때에는 string으로 처리해서 받아야 함

    ///////////////////////

    // 상식으로 알아두면 좋은 것
let x = 10;
console.log(x.toString()) //'10'
//console.log로 answkdufdmf 출력하게 되면 따옴표가 없음

// 10.toString() // 10. 까지 소숫점으로 인식
(10).toString() // 이렇게 적어야함


// 정보처리기사
// 1bit = 0과 1을 표현할 수 있는 최소 단위
// 8bit = 1byite
// 00000000 ~ 11111111 (0 ~ 255)
//  ex) 0.0.0.0 ~ 255.255.255.255
// 1024byte = 1KB
// 1024KB = 1MB
// 1024MB = 1GB
// 1024GB = 1TB
// 1024TB = 1PB 
// 연습법 갈매기털빼