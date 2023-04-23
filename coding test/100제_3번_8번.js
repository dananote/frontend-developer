//todo 문제 3번. 변수의 타입 (1)

var arr = [100, 200, 300];
console.log(typeOf(arr));

// *답: object
// 배열은 순사가 있는 객체타입이다.



//todo 문제 4번. 변수의 타입 (2)

// 변수 a를 typeof(a)로 넣었을 때 출력될 값과의 연결이 알맞지 않은것

//* 답: 입력: a = 2.22, 출력: boolean
// 2.22는 number 형으로 boolean으로 출력되는 값은 true, false 가 있다.



//todo 문제 5번. for문 계산

var a = 10;
var b = 2;

for (var i = 1; i < 5; i+=2) {
    a += i;
}

console.log(a+b);

//* 답: 16
// 반복문은 두번 돌게 된다. 처음에 10 + 1, 다음엔 i에 2를 더한 3 과 11 그 다음 반복문은 i 가 5가 되는데 5 < 5 는 false이므로 a는 14가 된다.



//todo 문제 6번. False

// true 값인 것은?

//* 답: 1
// false인 것들은 ''(빈문자열), 0, undefined, null, NaN
//falsy : 0, null, undefined, "", NaN
// nullish : null, undefined


//todo 문제 7번. 변수명

// 다음중 변수명으로 사용할수 없는 것


//* let, 1age
// 변수명의 규칙, 숫자로 사용할 수 없음, 예약어를 사용할 수 없음, 특수기호는 _ $ 만 허용, 관례적으로는 직관적으로 알 수 있는 변수명 사용을 권장하며 상수는 대문자로 시작하는 것을 권장함



//todo 문제 8번, 객체의 키 이름 중복

var d = {
    'height': 180,
    'weight': 78,
    'weight': 84,
    'temperature': 36,
    'eyesignt': 1
}

console.log(d['wieght']); 

//* 답: 가장 나중에 선언된 84 반환 그 전에 선언된것은 객체 안에 들어가지 못함
//(메모리상에서 변수를 선언하고 데이터할당하는 과정을 생각하면 weight의 값에 입력되는 메모리 주소값이 78 -> 84 로 변경될것)