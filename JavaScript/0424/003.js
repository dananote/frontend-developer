//* case.1
let me = {age: 30}; // 참조 카운트 : 1
let you = me // 카운트 : 2

me = undefined // 참조 카운트 : 1
// 값에 undefined나 null이 들어가 있으면 가비지컬렉션의 수거 대상이 됨!
you = null; // 참조 카운트 : 0 가비지 컬렉터 대상


//* case.2
let x = {
    y: {
        z: 1
    }
}