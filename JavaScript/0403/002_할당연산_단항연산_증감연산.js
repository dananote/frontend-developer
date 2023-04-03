 // 할당연산
 let x =  10;
 x = x + 10;
 x =+ 10; // x에 양수 10을 넣겠다는 뜻 (x = 10 + 이거랑 같음)
 x += 10; // 이렇게 해야 x에 10을 더하겠다는 뜻

 // 단항연산
 console.log(-(2)) // -2
 console.log(-(-2)) // 2
 console.log(+(-2)) // -2
 console.log(+(+2)) // 2
 console.log(+(+'2')) // 2

 // 증감연산
 let num = 3;
 ++num // 4 하나 증가 (선증가 후할당)
 --num // 2 하나 감소
 num++ // 처음에 출력할땐 3 다시 num 호출할땐 4 (선할당 후증가)
 num-- // 처음에 출력할땐 3 다시 num 호출할땐 2

 // 아래 코드의 결과값은 값음
 // 실무에서는 이것을 구분하는 것이 큰 의미가 없음 어차피 값은 같기 때문에
 for (let i = 0; i < 10; i++){
   console.log(i)
 }

 for (let i = 0; i < 10; ++i){
   console.log(i)
 }