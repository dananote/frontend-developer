//todo coccat을 활용한 출력방법
// 다음 소스 코드를 완성하여 날짜와 시간을 출력하시오.

//* concat() 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 배열을 반환

var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

let date = year.concat('/', month,'/',day,' ', hour,':', minute, ':',second)


//todo 별찍기
//? 답을 봐도 이해가 안갔던...


//todo  for를 이용한 기본 활용
// 1부터 100까지 모두 더하는 Code를 <pass> 부분에 완성하세요. for를 사용해야 합니다

let s = 0;

for (let i = 1; i <= 100; i++){
    s = s+i
 }

console.log(s);


//todo 게임 캐릭터 클래스 만들기
//다음 소스코드에서 클래스를 작성하여 게임 캐릭터의 능력치와 '파이어볼'이 출력되게 만드시오. 주어진 소스 코드를 수정해선 안됩니다.

// 클래스
class Wizard {
    constructor (a, b, c){
        this.health = a;
        this.mana = b;
        this.armor = c;
    }

    attack() {
        console.log('파이어볼')
    }
}

//생성자 함수
function Wizard(a, b, c) {
    this.health = a;
    this.mana = b;
    this.armor = c;
    this.attack = function () {
        console.log('파이어볼')
    }
}


const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();

// 출력
// 545 210 10
// 파이어볼

//* 생성자 함수 까먹어서 다시 풀어본 예제
// 음식 이름의 배열을 전달하면 배열안에서 랜덤하게 메뉴를 뽑아내는 기능을 가진 로봇객체의 생성자

function Random(food){
    this.name = food
    this.finger = function () {
      console.log(this.name[parseInt(Math.random() * food.length)])
    }
  }

    let foods = new Random(['짜장면','깐풍기','탕수육'])
  
  foods.finger()