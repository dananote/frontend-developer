//todo 구현해야할 기능
// 1. 입력할 수 있는 기능
//*  1-1 제목과 콘텐츠의 글자수 제한
//*  1-2 둘중 하나라도 입력을 안했을시 alert 을 띄움
// 2. 저장을 누를수 있는 기능
//   2-1 '현재 입력된 todo가 없습니다' 텍스트 사라짐
//   2-2 저장한 값을 화면에 불러옴
//   2-3 저장과 동시에 인풋창이 초기화
//   2-4 저장을 누른 시점의 날짜 기록
//   2-5 삭제버튼을 누르면 다시 '현재 입력된 todo가 없습니다' 텍스트가 돌아와야함
// 3. 삭제 기능
//   3-1 삭제하면 화면에서 사라짐

let date = new Date()

const inputTitle = document.querySelector('#todo_title')
const inputContent = document.querySelector('#todo_content')
const submitBtn = document.querySelector('#todo_save')
const todoList = document.querySelector('#todo_list')
const initialText = document.querySelector('#initial-text')

submitBtn.addEventListener('click',(event) => {
    event.preventDefault();

    if(inputTitle.value != '' && inputContent.value != ''){

        initialText.style.display = "none"

        // 새로운 요소들 생성
        let todo = document.createElement('li')
        let todoTitle = document.createElement('strong')
        let todoContent = document.createElement('p')
        let todoDate = document.createElement('date')
        let delBtn = document.createElement('button')

        todoTitle.innerText = inputTitle.value
        todoContent.innerText = inputContent.value
        todoDate.innerText = date.toLocaleDateString()
        delBtn.innerText = '삭제'

        todo.append(todoTitle,todoContent, todoDate, delBtn)
        todoList.append(todo)
        // apendchild는 한개만 와 append는 한개이상 추가 가능 

        // 인풋창 초기화
        inputTitle.value = ""
        inputContent.value = ""


        // 삭제 이벤트 추가
        delBtn.addEventListener('click', () => {
            delBtn.parentElement.remove();

            // 만약 uldm
            if(todoList.childElementCount === 0){
                initialText.style.display = "block"
            }
        }) 
        
    } 
})


