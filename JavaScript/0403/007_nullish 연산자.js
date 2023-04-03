// nullish 연산자
// https://ko.javascript.info/nullish-coalescing-operator
// 스펙에 추가된 지 얼마 안 된 문법입니다. 구식 브라우저는 폴리필(최신 문법을 구식 브라우저에서도 사용할 수 있도록 해주는 것)이 필요합니다.

let firstName = null;
let lastName = null;
let nickName = 'licat';

console.log(firstName ?? nickName) // null 이면 뒤에 있는것을 실행 , licat
console.log(firstName ?? lastName ?? nickName)
console.log(firstName ?? lastName ?? nickName ?? '익명')

let a = null;
let b = 10;
let c = null;

console.log(a ?? b ?? c) // 10 반환 null 이면 뒤로 계속 넘김 b는 null 이 아니므로 뒤로 넘어가지 않음

// 단락회로평과와 nullish 연산자 차이점
let height = 0;
console.log(height || 100) // 100 , height는 false이므로 뒤로 넘어가서 true인 100 출력
console.log(height ?? 100) // 0 , height는 null 이 아니므로

let height2;
console.log(height2 || 100) // 100
console.log(height2 ?? 100) // 100

let height3 = '';
console.log(height3 || 100) // 100
console.log(height3 ?? 100) // ''

// 주석으로 다는 내요은 지금 여기서 몰라도 되기 때문에
// || : 0, null, undefined
// ?? : null, undefined

// falsy하다 : 0, null, undefined, "", NaN
// nullish하다 : null, undefined