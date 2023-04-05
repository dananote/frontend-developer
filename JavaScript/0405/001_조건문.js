let score = 69;
let money = 1000;

if (score > 90){
  document.write('참 잘했습니다!<br>');
  money += 100000
} else if (score > 80){
  document.write('잘했습니다!<br>');
  money += 10000
} else if (score > 70){
  document.write('했습니다!<br>');
  money += 1000 
} else {
    money = 0
}

document.write(money);


// 💡 문제 (조건문)
// 사용자로부터 입력받은 나이에 따라 다른 인사말을 콘솔로 출력하는 프로그램을 작성하세요. 

// 1. 나이가 18세 이상이면 "안녕하세요!"를
// 2. 10세 이상이면 "안녕! 반가워 꼬마친구! ” 를 
// 3. 10세 미만이면 “부럽다…” 를 출력합니다.

let isAdult = parseInt(prompt('나이를 입력해주세요'))

if (isAdult >= 18) {
    alert('안녕! 반가워 꼬마친구!')
} else if(isAdlut >= 10) {
    alert('안녕! 반가워 꼬마 친구!')
} else {
    alert('부럽다..')
}


// 사용자로부터 입력받은 성적에 따라 성적을 출력하는 프로그램을 작성하세요. 

// 1. 성적이 90점 이상이면 "A", 
// 2. 80점 이상이면 "B", 
// 3. 70점 이상이면 
// 4. "C", 60점 이상이면 "D", 
// 5. 그 외에는 “강해져서 돌아와라”를 출력합니다.

let grade = parseInt(prompt('나이를 입력해주세요'));

if(grade >= 90) {
    console.log('A')
} else if(grade >= 80) {
    console.log('B')
} else if(grade >= 70) {
    console.log('C')
} else if(grade >= 60) {
    console.log('D')
} else {
    console.log('강해지렴,,')
}

// 100보다 넘는 값이 들어오는걸 생각하고

// let score = parseInt(prompt('나이를 입력해주세요'));

if(score > 100) {
    alert('값이 너무 커요');
} else {
    if(score >= 90) {
        console.log('A');
    } else if(score >= 80) {
        console.log('B');
    } else if(score >= 70) {
        console.log('C');
    } else if(score >= 60) {
        console.log('D');
    } else {
        console.log('강해지렴,,');
    }
}


// 위에걸 삼항연산자로
// let score = parseInt(prompt('나이를 입력해주세요'));
// let grade = score > 100 ? alert('숫자가 너무 커요') : score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : '돌아가세요'
// console.log(grade)