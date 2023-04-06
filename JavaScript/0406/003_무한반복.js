
let answer = Math.floor(Math.random() * 100)
// random은 seed라는 값을 주면 동일한 랜덤값이 나오는 수학수식입니다.(규칙이 있다는 뜻)
// ~~(Math.random()*100)
let count = 0

for (;;) {
    count += 1
    let userInput = parseInt(window.prompt('값을 입력해주세요!'))
    if (answer > userInput) {
        window.alert('UP!')
    }
    else if (answer < userInput) {
        window.alert('DOWN!')
    }
    else if (Number.isNaN(userInput)) {
        window.alert('다시 입력하세요!')
    }
    else {
        window.alert('Correct!')
        break
    }
}

console.log(`${count}번째 맞추셨습니다!`)


// for (;;) { 
//     // 무한반복 코드로 위험하니 사용하지 말기
//     // 의도한 무한반복은 매우 위험함
//     // 무한반복 코드가 있는 이유? 마우스 움직임 실시간 좌표가 무한반복으로 찍힘
//     // 무한반복은 메모리를 많이 잡아먹기 때문에 시스템 전체의 영향이 감
//     // <굳이 무한반복을 해야한다면>
//     // 1. 반복의 시간을 가능하면 정해주기
//     // 2. 탈출 조건을 명학히 해주기
//     console.log('실행하지 마시오'); // 계속 수가 무한으로 생성함
// }

for(let i = 0; i < 10;){
    console.log('무한반복 코드')
    i += i;
}

for(let i = 0;;){
    console.log('무한반복 코드')
    i += i;
    if(i >= 10){
        break
    }
}

let i = 0
for(;;) {
    console.log('이건 무한반복 아님')
    i += i;
    if(i >= 10){
        break
    }
}
