Date()

let d = new Date();
d.getDate() // 1 부터 시작합니다. 날짜를 출력합니다.
d.getMonth() // 0월 부터 시작합니다. +1을 해야합니다.
d.getDay() // 0부터 시작합니다. 0은 일요일입니다.

switch (d.getDay()) {
    case 0:
        console.log('일요일')
        break;
    case 1:
        console.log('월요일')
        break;
    case 2:
        console.log('화요일')
        break;
    case 3:
        console.log('수요일')
        break;
    case 4:
        console.log('목요일')
        break;
    case 5:
        console.log('금요일')
        break;
    case 6:
        console.log('토요일')
        break;
    default:
        console.log('날짜의 양식이 잘못되었습니다.')
        break;
}

d.getHours() 
d.getMinutes()
d.getSeconds()

d.getFullYear()
// d.getYear() // 1900년도부터 연도 계싼, 쓰지 않습니다. 잊어버리세요

new Date(2023, 5, 30, 18)