const value = 'two';

switch (value) {
    case 'one':
        console.log('hello one')
        break;
    case 'two':
        console.log('hello two')
        break;
    case 'three':
        console.log('hello three')
        break;
    default:
        console.log('hello default')
        break;

}

const value2 = 'four'

switch (value2) {
    case 'one':
        console.log('hello one')
        break;
    case 'two':
        console.log('hello two')
        break;
    case 'three':
        console.log('hello three')
        break;
    default:
        console.log('hello default')
        break;
}



const value3 = 'one'; // hello one, two, three, default
// const value3 = 'two' //hello two, three, default
// break를 쓰지 않으면 접근을 못하기 전까지 다 반환함

switch (value3) {
    case 'one':
        console.log('hello one')
    case 'two':
        console.log('hello two')
    case 'three':
        console.log('hello three')
    default:
        console.log('hello default')

}

///

switch (new Date().getDate()) {
    case 0:
        console.log('일요일')
        break;
    case 1:
        console.log('월요일');
        break;
    case 2:
        console.log('화요일');
        break;
    case 3:
        console.log('수요일');
        break;
    case 4:
        console.log('목요일');
        break;
    case 5:
        console.log('금요일');
        break;
    case 6:
        console.log('투요일');
        break;

    default:
        break;
}

//default는 견고한 코딩을 위해서 쓰는 편이 좋은데 만약 확실하게 변수가 나오는 case의 경우수가 있다면 빠져도됨 예) 요일


// 여러줄 복사하고 싶을 때는 alt + shift + 위아래
// 같은 단어 찾고 싶을 때눈 cmd + D
// 같은 모든 단어 cmd + shift + l
// 자동정렬 cmd + a, cmd k + f
// 한 줄 전체 선택 shft + cmd + left, cmd + opt + 1
// 커서 위치 행 삭제 cmd + shift + k
// 한 줄 잘라내기 cmd + x


// 다른 언어에서 switch문 어떻게 사용할까?
// python은 swhitch문 없는데

const 요일 = new Date().getDay()
const 요일객체 = {
    0: '일요일',
    1: '월요일',
    2: '화요일',
    3: '수요일',
    4: '목요일',
    5: '금요일',
    6: '토요일'
}

console.log(요일객체[요일])


// defult는 어떻게 처리?
const 요일2 = 10
const 요일객체2 = {
    0: '일요일',
    1: '월요일',
    2: '화요일',
    3: '수요일',
    4: '목요일',
    5: '금요일',
    6: '토요일'
}

console.log(요일객체2[요일2]) // undefined

//널리쉬 연산자 사용
console.log(요일객체2[요일2] ?? 'hello')
// console.log(undefined ?? 'hello')

// 단락평가 사용
console.log(요일객체2[요일2] || 'hello')
console.log(undefined || 'hello')
