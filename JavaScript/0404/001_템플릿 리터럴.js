const x = 10;
const y = 20;
console.log('x 값은 10이고 y값은 20이고 두개를 곱한 값은 200입니다.')
console.log(`x값은 ${x}이고 y값은 ${y}이고 두개를 곱한 값은 ${x*y}`)
// 템플릿 리터럴 중괄호 안에 연산을 넣는 것을 권하지 않습니다. 유지보수 때문에

const x2 = 10;
const y2 = 20;
const result = x2 * y2;
console.log(`x값은 ${x2}이고 y값은 ${y2}이고 두개를 곱한 값은 ${result}`)

// console.log('
// h
// e
// l
// l
// 0')

// 위에 처럼 줄바꾸기 하고싶다면 이럴때도 레터럴

console.log(`
h
e
l
l
0`)

// 예전에는 \n 을 써서 줄바꾸기 했었음
const s = 'hello'
const ss = 'world'
const result2 = s + '\n' + ss
console.log(result2)
