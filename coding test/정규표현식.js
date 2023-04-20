//todo 팰린드롬 문장인지 아닌지 값 구하기
// 문자열이 입력되면 해당 문자열이 팰린드롬이면 "YES", 아니면 “NO"를 출력하는 프로그램
// 단, 알파벳으로만 검사를 하며 대소문자를 구별하지 않는다.



let str = "found7,time:study;Yduts;emit,7Dnuof"

// 먼저 toLowerCase() 으로 모두 소문자로 만들어준다
// toUpperCase() 는 모두 대문자로 만드는 메서드
let str1 = str.toLowerCase();

// replace와 정규표현식 으로 특수문자를 제외해준다.
// [^]이거는 대괄호 안에있는걸 제외한 이라는 뜻이다.
// replace의 두번째 인수는 변경할것을 의미한다 그래서 공백이 없는 문자를 넣어주었다
let str2 = str1.replace(/[^a-zA-Z0-9]/g, "")

// 시도1 splite() 전체 다 배열 안으로 들어옴
// 시도2 split(';') ; 이것을 기준으로 세개로 나눠서 배열로 들어옴
// 시도3 split("") 한글자씩 나눠져서 들어옴 단, "띄고" 이렇게 쓰면 첫번째 처럼 적영됨
let str3 = str2.split("")

// reverse()로 배열을 거꾸로 돌림
// 처음엔 문자 자체에 revese()를 주었더니 함수가 아니라는 에러가 뜸 
// MDN에 검색해보니 배열의 요소를 반전시키는 역할을 한다고 한다.
let str4 = str3.reverse()

// join()으로 합치기!
// : 배열의 모든 요소를 연결해 하나의 문자열로 만드는 메서드
// 처음엔 위에처럼 바로 사용했는데 다 쉼표로 나눠져서 들어오길래 안에 split때와 마찬가지로 따옴표로 주었더니 정상적으로 합쳐짐
let str5 = str4.join("")

// 특수문자를 제거한거까지와 비교해보니 true가 뜸!!
str2 === str5 // true

function solution (str) {
    str = str.toLowerCase();
    str = str.replace(/[^a-zA-Z0-9]/g,"");
    let str2 = str.split("").reverse().join("");
    if(str === str2){
        console.log('Yes')
    } else {
        console.log('No')
    }
}

const testA = "found7,time:study;Yduts;emit,7Dnuof";
console.log(solution(testA)); // YES

const testB = "hello,world";
console.log(solution(testB)); // NO

const testC = "hello,world;dlrow,olleh";
console.log(solution(testC)); // YES


// -------------------------------------------------------------------

//todo 369 게임

let order = 34345345;
let num = order.toString()
let leng = num.match(/[369]/g)
console.log(leng.length)

//! 오답
function solution(order){
    order = order.toString();
    order = order.match(/[369]/g);
    return order.length;
}

function solution(order){
    let answer = order.toString().match(/[369]/g);
    return answer.length;
}

