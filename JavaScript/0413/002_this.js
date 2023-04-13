// this(🌟🌟🌟)
// 자신을 호출한 객체 (함수를 호출한 방법에서 결정)
// 자신이 생성활 객체

function c(){
    console.log('hello')
}
a() // 'hello'
window.c() /// 'hello'




function a(){ console.log(this) } // a를 호출한것이 window
a(); // Window를 호출


function b(){
    cibsike.log('hello world')
}
b()
window.b() // b를 호출한것이 window


/////////////////////////


let myObj = {
    val1: 100,
    func1: function () {
        console.log(this);
        // this가 누구일까?
        // 1. func1
        // 2. myObj
        // e. window
    }
}

myObj.func1(); // myObj를 호출

/////////////////////////
// this가 어려운 이유는 this를 포함하고 있는 객체가 있는 위치에 따라서 의미가 달지기 때문이다.
// bind를 포함한 예외사항이 있음( this는 안기와 가까움  )

// 💡 문제: this가 가르키고 있는 건 누구인가
function sayName() {
    console.log(this)
}

var c2 = {
    'hello': 'world',
    'say': sayName
}

var b2 = { 
    'c2': c2,
}

var a2 = {
    'b2': b2,
}






////
function sayName() {
    console.log(this)
}

var c2 = {
    'hello': 'world',
    'say': sayName
}

var b2 = { 
    'c2': c2,
    'say': sayName
}

var a2 = {
    'b2': b2,
    'say': sayName
}

// 💡 추가 예제

var name = 'taehee'

function sayName(){
    console.log(this.name)
}

sayName() // 'taehee'

let peter = {
    name: 'Peter Parker',
    say: sayName,
}

let bruce = {
    name: 'Bruce Wayne',
    say: sayName,
}

peter.say() // 'Peter Parker'
bruce.say() // 'Bruce Wayne/

///

function attackBeam() {
    this.hp -= 20;
}

function attackknife() {
    this.hp -= 5;
}

let jombi = {
    name: 'jombi',
    damaged1: attackknife,
    damaged2: attackBeam,
    hp: 10000,
    power: 2,
}

let thanos = {
    name: 'thanos',
    damaged: attackBeam,
    hp: 1000,
    power: 100,
}

jombi.damaged1()
jombi.damaged2()

/////////

let jombi2 = {
    name: 'jombi',
    damaged: [attackknife,attackBeam],
    hp: 10000,
    power: 2,
}


jombi2.damaged[0]()
jombi2.damaged[1]()
// 배열이 선택되 버림

///////

// this 사용 예시
let 호텔 = [{
    '이름': '하나호텔',
    '위치': '제주도 제주시 001',
    '가격': { 'A': 50000, 'B': 30000, 'C': 15000 },
    '방의개수': 50,
    '예약자수': 25,
    '남은방의개수': function () { return this.방의개수 - this.예약자수 }
}, {
    '이름': '둘호텔',
    '위치': '제주도 제주시 002',
    '가격': { 'A': 100000, 'B': 60000, 'C': 30000 },
    '방의개수': 100,
    '예약자수': 30,
    '남은방의개수': function () { return this.방의개수 - this.예약자수 }
}, {
    '이름': '셋호텔',
    '위치': '제주도 제주시 003',
    '가격': { 'A': 80000, 'B': 50000, 'C': 30000 },
    '방의개수': 120,
    '예약자수': 80,
    '남은방의개수': function () { return this.방의개수 - this.예약자수 }
}];
console.log(호텔[0].남은방의개수());
console.log(호텔[1].남은방의개수());
console.log(호텔[2].남은방의개수());


///

function a() {
    console.log(this)
    function b() {
        console.log(this)
        function c() {
            console.log(this)
        }
        c()
    }
    b()
}
a()

// a, b, c 모두 window
// 위 함수는 a.b.c.() 이런식으로 호출한 객체를 타고 올라가는 형태가 아님
