//todo 배열의 삭제
// 다음 배열에서 400, 500를 삭제하는 code를 입력하세요

let nums = [100, 200, 300, 400, 500];



//! .pop()마지막 값을 꺼내고 반환
nums.pop(100);
console.log(nums);


//! split() 은 문자형 객체를 자를때 사용
let error = nums.split(0, -2); // 에러! nums.split is not a function

//* .splice()는 배열에 안에 추가할때 사용(추가와 동시에 삭제도 가능)(원본 배열에 영향을 미침)
// .splice(start, deleteCount, items)
// 인수를 1개만 썼을 경우, 해당 인수의 인덱스 까지 삭제
// 인수를 2개만 썼을경우, 첫번째 인수 부터 두번째 인수 갯수만큼 삭제
// 인수를 3개만 썼을 경우, 첫번째 인수 부터 두번째 인수 갯수만큼 삭제 후 해당 위치에 3번째 인수 추가
let result1 = nums.splice(-2, 2); // 마지막에서 2번째 인덱스 부터 2개 삭제

//* .slice() 는 인수로 전달된 범위 요소만큼 복사하여 배열로 반환 (원본 배열에 영향을 끼치지 않음)
// .slice(start, end) 범위는 start ~ end전까지
// 인수를 1개만 썼을 경우, end로 취급 end 전까지 반환
let result = nums.slice(0, 3);



//* 함수로 만든다면?
// 답안지를 보고 .pop() 을 두번 썼길래 만들어봄

function newNums(arr){
    for(let i = 0;i < 2;i++){
        arr.pop();
    }
    return arr 
    //? return을 왜 반복문 안에 넣으면 한번만 식행하고 작동을 안하는걸까?
    // return을 만나면 함수 실행을 종료하고 호출 함수로 컨트롤을 반환하는데 반복문안에 있을때도 마찬가진지
}

newNums(nums);

