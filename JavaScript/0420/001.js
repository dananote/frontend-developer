class Sausage {
    constructor(el1, el2) {
        this.inside1 = el1;
        this.inside2 = el2;
    }

    taste() {
        console.log(`와~ ${this.inside2}맛과 ${this.inside1}맛이 나는 소세지다!`)
    }
}

const sausage = new Sausage('갈릭','머스타드')
sausage.taste() // 와~ 머스타드맛과 갈릭맛이 나는 소세지다!



class Firesausage extends Sausage {
    constructor(el1, el2, el3) {
        // this.inside1 = el1;
        // this.inside2 = el2;
        SpeechSynthesisUtterance(el1, el2);
        this.inside3 = el3;
    }
    // 오버로딩


    // 오버라이딩
    taste() {
        console.log(`와~ ${this.inside2}맛과 ${this.inside1}맛과 ${this.inside3}맛이 나는 소세지다!`)
    }
}