// ✅ while
let x = 0;
while (x < 10) {
    console.log('start')
    console.log(x)
    x += 1
    console.log('end')
}

// ✅ do while
let input;
do {
    input = prompt('숫자를 입력하세요.');
} while(isNaN(input));

console.log("입력한 숫자는" + input + "입니다.")


let input2;
do {
    input2 = prompt('다음에도 저희와 함께하시겠습니까?');
} while(!input2);

console.log("감사합니다.")


// 👩‍💻 암기코드 
// ✅ 구구단

//for
for(let i = 2; i < 10; i++){
    for (let j = 2 j < 10; j++){
        console.log(`${i} X ${j} = ${i * j}`)
    }
} 


// while
let i = 2;
while(i < 10){
    let j = 1;
     // j 초기화를 안에서 해줘야함 여기서 초기화를 하지 않고 밖에서 초기화를 했다면 j는 아래에서 한번 1~9까지 돌고 10에서 while을 벗어난뒤 계속 10으로 유지됨
    while(j < 10){
        console.log(`${i} X ${j} = ${i * j}`)
        j++;
    }
    i++;
}

// ✅ 문자열 뒤집기

// 뒤집기 전
let s1 = 'hello world';
let result = '';
for (let i = 0; i < s1.length; i++) {
    result = result + s1[i]
}

console.log(result) // 'hello world'


// for 뒤집은 후
let s2 = 'hello world';
let result = ''
for (let i = 0; i < s2.length; i++) {
    result = s2[i] + result
}

console.log(result) // 'dlrow olleh'

// s[0] + result => 'h' + '' => 'h'
// s[1] + result => 'e' + 'h' => 'eh'
// s[2] + result => 'l' + 'eh' => 'leh'
// ...

// while 뒤집은 후
let s3 = 'hello world'
let result = ''
let count = 0
while (count < s3.length) {
    result = s3[count] + result
    count++;
}

console.log(result) // 'dlrow olleh'


// ✅ 팩토리얼
// 5! = 5 * 4 * 3 * 2 * 1

// for
let s4 = 1;
for(let i = 1; i < 6; i++){
    s4 *= i
}

console.log(s4)

// while
let s5 = 1;
let i = 1;
while(i < 5) {
    s5 *= i
    i++
}

console.log(s4)

