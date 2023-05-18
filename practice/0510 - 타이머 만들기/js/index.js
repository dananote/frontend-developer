let hrs = document.querySelector('.hrs-count');
let min = document.querySelector('.min-count');
let sec = document.querySelector('.sec-count');

let startBtn = document.querySelector('.start-btn');
let pauseBtn = document.querySelector('.pause-btn');
let resetBtn = document.querySelector('.reset-btn');

let timeLeft = 10;

startBtn.addEventListener('click', () => {
    startBtn.style.display ='none';
    pauseBtn.style.display ='block';
    const timer = setInterval(() => {
        timeLeft--;
        sec.textContent = timeLeft;
        pauseBtn.addEventListener('click',() => {
            clearInterval(timer)
            startBtn.style.display = 'block'
            pauseBtn.style.display = 'none'
        })
        resetBtn.addEventListener('click', () => {
            clearInterval(timer);
            sec.textContent = '00';
            startBtn.style.display = 'block'
            pauseBtn.style.display = 'none'
        })
        if(timeLeft === 0){
            clearInterval(timer);
            alert("타이머 끝!")
        }
    }, 1000)
})

