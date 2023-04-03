// 단락회로평가 ***
// true : 1
// false : 0
// and(&&) : 곱
// or(||) :  합
// not(!) : 부정

console.log(!"false") // 현재 false는 문자형이므로 false 반환
console.log(!"0") // false

console.log(!false) // true
console.log(!0) // true 

console.log('abc' / 2) // NaN

// 느낌표 2개는 부정의 부정임 해당 불린형의 상태를 알 고 싶을떄 많이 사용
console.log(!!NaN) //false
console.log(!!undefined) //false
console.log(!!null) //false

let username = "";
username = username || '무명'
//앞에 것이 false이기 때문에 뒤에 있는 것이 실행되고 '무명'은 true이기 때문에 username이 '무명'이됨 
console.log(username)

let username1 = "";
username = username && '무명'
// and이기 때문에 앞에것이 flase여서 뒤에것을 보지 않고 앞에것을 반환
console.log(username)