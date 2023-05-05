const openBtn = document.querySelector('.btn-open')
const article = document.querySelector('.popup')
const closeBtn = article.querySelector('.btn-close')
const dim = document.querySelector('.dim')

// 첫번째 포커스 요소
const firstEl = article.querySelector('a')


// 스크롤 방지
function preventScroll() {
    document.body.style.overflow = 'hidden';
}

function openPopUp() {
    article.classList.add('active');
    preventScroll()
    firstEl.focus();
}

function closePopUp() {
    article.classList.remove('active')
}

openBtn.addEventListener('click', openPopUp)
closeBtn.addEventListener('click', closePopUp)


// 키보드 접근성을 고려한 함순
closeBtn.addEventListener('keydown', function(e) {

    // tab만 눌렀을때 (Shift+tab일땐 실행되지 않음.)
    if(!e.shiftKey && e.key === "Tab"){
        e.preventDefault();
        firstEl.focus()
    }
})

firstEl.addEventListener('keydown', function(e){
    //Shift+tab 같이 눌렀을 때 실행
    if(e.shiftKey && e.key === "Tab"){
        e.preventDefault();
        closeBtn.focus()
    }
})

//esc 눌렀을때 모달창 꺼짐
document.addEventListener('keydown', function(e){
    if(article.classList.value === "popup active" && e.key === "Escape"){
        closePopUp()
    }
})

// 뒷배경을 눌렀을때 팝업닫힘
dim.addEventListener('click', closePopUp)