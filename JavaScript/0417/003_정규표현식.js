//* https://regexr.com/5nvc2

// https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EC%A0%95%EA%B7%9C%EC%8B%9D-RegExp-%EB%88%84%EA%B5%AC%EB%82%98-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-%EC%89%BD%EA%B2%8C-%EC%A0%95%EB%A6%AC


'paullab CEO leehojun hello CEO'
// 문자열 1개만 매칭되어 변경
'paullab CEO leehojun hello CEO'.replace('CEO', 'CTO')
// flag로 global을 주어서 전체 변경(m-다중라인, i-대소문자구분X)
'paullab CEO leehojun hello CEO'.replace(/CEO/g, 'CTO')
// 패턴을 찾아 Array로 반환
'paullab CEO leehojun hello CEO'.match(/CEO/g)
// 패턴으로 Split
'paullab CEO leehojun hello CEO'.split(/CEO/g)
// 패턴이 들어가 있으면 true 없으면 false
(/CEO/g).test('paullab CEO leehojun hello CEO')

// 알고리즘 문제 풀이할 때 주의 사항
// split을 하면 내가 원하는 갯수보다 1개가 더 추가되어 나온다
'!a!abc!abcd'.split('!')
'!!!'.split('!') // 4개
'!a!a!a'.split('!') // 4개
'a!a!a!'.split('!') // 4개

'!a!a!a'.split('!').length - 1




//* https://school.programmers.co.kr/learn/courses/30/lessons/49993

'paullab CEO leehojun hello CEO'

/// 문자열 1개만 매칭되어 변경
'paullab CEO leehojun hello CEO'.replace('CEO','CTO')

/// flag를 global로 주어서 전체 변경(m - 다중라인, i - 대소문자 구별)
'paullab CEO leehojun hello CEO'.replace(/CEO/g, 'CTO')

/// 패턴을 찾아 Array로 반환
'paullab CEO leehojun hello CEO'.match(/CEO/g)

/// 패턴으로 Split
'paullab CEO leehojun hello CEO'.split(/CEO/g)

/// 패턴이 들어가 있으면 true 없으면 false
(/CEO/g).test('paullab CEO leehojun hello CEO')



/// split을 하면 내가 원하는 갯수보다 1개가 더 추가되어 나온다.
'!a!abc!abcd'.split('!')
'!!!!'.split('!')
'!a!a!a'.split('!') // 빈공간 배열 1개 추가 
'a!a!a!'.split('!') // 빈 공간 배열 2개 추가

'!a!a!a'.split('!').length - 1


// TODO 예제 1번
//* https://school.programmers.co.kr/learn/courses/30/lessons/49993

function solution(my_string, letter) {
    return my_string.split(letter).join('');
}
'BCBdbe'.split('B')
'BCBdbe'.split('B').join('')

// 오답 : 1개만 바꿉니다.
function solution(my_string, letter) {
    return my_string.replace(letter, '');
}
'BCBdbe'.replace('B', '')

// 오답 : 정규표현식 패턴은 문자열로 만드는 것이라 별도로 생성을 해주어야 합니다.
function solution(my_string, letter) {
    return my_string.replace(`/${letter}/g`, '');
}
'BCBdbe'.replace('B', '')
let letter = 'B'
'BCBdbe'.replace(`/${letter}/g`, '');

// 정답
function solution(my_string, letter) {
    // new RegExp(패턴으로 사용할 문자열, 플래그)
    // replace에서만 사용되는 것이 아니라 정규표현식이 들어가는 곳 모두에서 사용할 수 있습니다.
    let reg = new RegExp(letter, 'g') 
    return my_string.replace(reg, '');
}

// new RegExp('B', 'g') 이렇게 사용하시거나 my_string.replace(/B/g, '')


//TODO 예제 2번
//* https://school.programmers.co.kr/learn/courses/30/lessons/120826

// 정답 유형1 : 숫자를 찾는다!
function solution(my_string) {
    return my_string
        .match(/[0-9]/g)
        .reduce((a, b) => parseInt(a) + parseInt(b), 0)
}

"aAb1B2cC34oOp".match(/[0-9]/g)
"aAb1B2cC34oOp".match(/[0-9]/g).map(x => parseInt(x)).reduce((a, b) => a + b, 0)
"aAb1B2cC34oOp"
    .match(/[0-9]/g)
    .map(x => parseInt(x))
    .reduce((a, b) => a + b, 0)
"aAb1B2cC34oOp"
    .match(/[0-9]/g)
    .reduce((a, b) => parseInt(a) + parseInt(b), 0)


// 정답 유형2 : 문자를 제거한다!



//TODO 예제 3번
//* https://school.programmers.co.kr/learn/courses/30/lessons/120891

// 오답! null일때 length가 없습니다!
function solution(order) {
    return order.toString().match(/[369]/g).length;
}

(163009).toString().match(/[369]/g)
(0).toString().match(/[369]/g)
(10).toString().match(/[369]/g)

// 정답
function solution(order) {
    let value = order.toString().match(/[369]/g) ?? []
    return value.length;
}

function solution(order) {
    return (order.toString().match(/[369]/g) ?? []).length;
}


//TODO 예제 4번
//* https://school.programmers.co.kr/learn/courses/30/lessons/120913
// 아래와 같이 풀 수 있지만 정규표현식을 사용하면 더 간단해집니다.
function solution(my_str, n) {
    let result = []
    for (let i = 0; i < my_str.length; i += n) result.push(my_str.slice(i, i + n))
    return result
}

[0 - 9][0 - 9][0 - 9][0 - 9] - [0 - 9][0 - 9][0 - 9][0 - 9]
[0 - 9]{ 1, n }

"abc1Addfggg4556b".match(/[a-zA-Z0-9]{4}/g)
"abc1Addfggg4556b".match(/[a-zA-Z0-9]{3}/g)
"abc1Addfggg4556b".match(/\w{3}/g) // 문자
"abc1Addfggg4556b".match(/\d{3}/g) // 숫자
"abc1Addfggg4556b".match(/.{3}/g) // 모든문자
"".match(/.{3}/g) // 주의 : null

// 오답
function solution(my_str, n) {
    let reg = new RegExp(`.{${n}}`, 'g') // 마지막 남은 것도 리턴해줘야 해서 오답
    return my_str.match(reg)
}

// 정답
function solution(my_str, n) {
    let reg = new RegExp(`.{1,${n}}`, 'g')
    return my_str.match(reg)
}

function solution(my_str, n) {
    let reg = new RegExp(`\\w{1,${n}}`, 'g') // '\'를 표현하기 위해서 '\\'를 사용
    return my_str.match(reg)
}


// 5번 문제
// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120864
// 2번 문제 업그레이드
// 2번 문제 해답
function solution(my_string) {
    return my_string
        .replace(/[^0-9]/g, '')
        .split('')
        .reduce((a, b) => parseInt(a) + parseInt(b), 0)
}

// 오답
function solution(my_string) {
    return my_string
        .match(/\d+/g)
        .reduce((a, b) => parseInt(a) + parseInt(b), 0)
}

// 정답
function solution(my_string) {
    return (my_string.match(/\d+/g) ?? [])
        .reduce((a, b) => parseInt(a) + parseInt(b), 0)
}

"aAb1B2cC34oOp".match(/\d/g)
"aAb1B2cC34oOp".match(/\d+/g)
"aAb1B2c111C34oO123p".match(/\d+/g)

////////////////// 그룹 연습문제 //////////////////
'gogaooogogooo'.match(/(go)/g); // ['go', 'go', 'go']
'gogaooogogooo'.match(/[go]/g); // ['g', 'o', 'g', 'o', 'o', 'o', 'g', 'o', 'g', 'o', 'o', 'o']

// 숫자 2자리와 알파벳 하나씩이 매칭되도록 다음의 패턴에서 문자열을 추출하시오.

// '87a99b00fww89e' => ['87a', '99b', '00f', '89e']
'87a99b00fww89e'.match(/[0-9][0-9][a-zA-Z]/g)
'87a99b00fww89e'.match(/([0-9][0-9])([a-zA-Z])/g) // 숫자 그룹과 문자 그룹으로 나눕니다.
'87a99b00fww89e'.match(/([0-9]{2})([a-zA-Z])/g)
'87a99b00fww89e'.match(/(\d{2})([a-zA-Z])/g)



'a10b9r1ce33uab8wc918v2cv11v9'.match(/[rev][0-9]/g)


'a10b9r1ce33uab8wc918v2cv11v9'.match(/[rev][0-9]\d*/g)


[10, 20, 30].reduce((a,b) => {
console.log(a)
a + b,0
}
)


let x = [1, 3, 4].reduce((a,b) => a + b,0)

let y = ['a1', 'f2', 'd3'].map(v => parseInt(v.slice(1)))

'r10e34v3'.match(/[rev](10|[0-9])/g)

const string= 'rho, taehee, lee, hojun';
let result = string.replace(/(\w+), (\w+)/g, "$2 $1")