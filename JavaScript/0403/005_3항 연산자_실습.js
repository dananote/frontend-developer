// 통장에 10000원 초과있으면 '부자'
// 통장에 10000원 이하있으면 '부를 바라는자'

let money = 30000;
let message = money <= 10000 ? '부를 바라는자' : '부자'
console.log(money)

//통장에 100000원 초과해서 있으면 '초부자'
// 통장에 10000원 초과 해서 있으면 '부자'
// 통장에 10000원 이하 있으면 부를 바라는자

let money2 = 1000000
let message2 = money2 > 100000 ? '초부자' : (money2 <= 10000 ? '부를 바라는자' : '부자')