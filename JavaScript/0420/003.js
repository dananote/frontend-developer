//todo 비공개 프로퍼티 만들기 (생성자 함수로)
//* 클로저 + 생성자 함수

function Person() {
    let age = 25;


    // 생성자 함수 안에 생성자 함수
    function innerPersonType(){};

    innerPersonType.prototype.getAge = function () {
        return age;
    }

    return innerPersonType;

}

const person = Person() // person // innerPersonType(){}
const myPerson = new person() // myPerson // innerPersonType {} / [[Prototype]]:Object


//* 즉시실행 함수 이용

const Person2 = (function() {
    let age = 25;

    function innerPersonType(){};

    innerPersonType.prototype.getAge = function () {
        return age;
    }

    return innerPersonType;
}())

const myPerson2 = new PersonGenerator2();
