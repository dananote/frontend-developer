const cars = ["BMW", "Volvo", "Saab", "Ford", "Flat", "Audi"];

let text ="";

`
<section>
<hw>BMW</h2>
</section>
<section>
<hw>Volvo</h2>
</section>
...

`

text += '<section><h2>' + cars[0] + '</h2></section>'
text += '<section><h2>' + cars[1] + '</h2></section>'
text += '<section><h2>' + cars[2] + '</h2></section>'
text += '<section><h2>' + cars[3] + '</h2></section>'
text += '<section><h2>' + cars[4] + '</h2></section>'

document.write(text)


// 위에 코드를 반복문으로 
const cars2 = ["BMW", "Volvo", "Saab", "Ford", "Flat", "Audi"];
let text2 = "";
for(let i = 0; i < cars2.length; i++){
    text2 += '<section><h2>' + cars2[i] + '</h2></section>'
}
document.write(text2)



// for문
for (let i = 0; i < 10; i++) {
    console.log(i); // 0 ~ 9 반환 
}
// console.log(i) // i 는 반복문이 끝난 다음 홓출할 수 없음. 블록레벨 스코프 이기 때문에

for (let i = 0; i < 10; i+=2) {
    console.log(i); // 0, 2, 4, 6, 8 반환 (짝수만)
}

for (i = 0; i < 10; i+=2) {
    // let을 생략하면 i가 전역으로 생성이 되버림 생략하면 안됨
    console.log(i); 
}


