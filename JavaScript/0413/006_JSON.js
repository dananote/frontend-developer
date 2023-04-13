// ✅ JSON
// 자바스크립트에서 객체를 표현하는 형식으로 데이터를 표현한것입니다 (텍스트로 표현된 정보 덩어리)
// json운 홑따옴표를 허락하지않음

// 백엔드에게 아래 둘중 하나의 파일 형식으로 데이터를 전달받음

//json
// {
//     "squadName": "슈퍼히어로",
//     "members": [
//       {
//         "name": "아이언맨",
//         "age": 29,
//         "본명": "토니 스타크"
//       },
//       {
//         "name": "헐크",
//         "age": 39,
//         "본명": "부르스 배너"
//       }
//     ]
//   }

//xml
// <?xml version="1.0" encoding="UTF-8" ?>
// <root>
//   <squadName>슈퍼히어로</squadName>
//   <members>
//     <name>아이언맨</name>
//     <age>29</age>
// 		<본명>토니 스타크</본명>
// 	</members>
// 	<members>
// 	  <name>헐크</name>
// 	  <age>39</age>
// 		<본명>부르스 배너</본명>
// 	</members>
// </root>


// ✅ JSON 메서드
 // 📍 JSON.parse(): JSON문자열을 자바스크립트 객체로 변환합니다. (문자열 -> 객체)
 // 📍 JSON.stringify() : 자바스크립트 객체를 JSON문자열로 변환합니다 (객체 -> 문자열)

const json = '{"result": true, "content":42}';
const obj = JSON.parse(json);
console.log(obj) // {result: true, content: 42}

const json2 = '[1, 2, 3]';
const obj2 = JSON.parse(json2);
console.log(obj2) // [1, 2, 3]

const json3 = {"result": true, "content": 42};
const s = JSON.stringify(json3)
console.log(s) // {"result":true,"content":42}

// 깊은 복사
let l = [10, 20, 30];
let a = JSON.parse(JSON.stringify(l));
a[0] = 1000;

console.log(l);

// error
let l2 = [10, 20, 30];
let a2 = JSON.parse(`${l2}`);
a[0] = 1000;

console.log(l2);