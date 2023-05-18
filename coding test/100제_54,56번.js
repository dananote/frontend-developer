//todo 54번

function solution(stamp) {
    let num = [];
    let stamp2 = stamp.split(" ").map(Number);

    for(let i = 0; i < stamp2.length; i++){
        num.push(stamp2[0] + i)
    }

    if(num.join("") === stamp2.join("")){
        return 'YES'
    } else {
        return 'NO'
    }

}

solution('1 2 3 4 5')



//todo 56번
