import logo from './logo.svg';
import './App.css'
import {useState} from 'react'

//? 궁금한거
// 1. 데이터를 아래로 다 내렸는데 버튼에도 그 데이터를 쓰고 있는데 위에도 똑같이 써도 되는지
// 2. map으로 변경하는법


function App() {
  let [title, chageTitle] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  return (

      <div className="App">
      <div className="black-nav">
        <h4 style={{fonstSize: '24px'}}>ReactBlog</h4>
      </div>

    {/* onClick 의 속성에는 무조건 함수가 들어가야 하는데 해당 state를 변경하렴 state의 변경 함수를 가져다 써야한다. 아래 좋아요 버튼에서 state가 변경되면 재 랜더링 되게 때문에 state를 가져다 쓴거임 */}

      <button onClick={() =>{
        let copy = [...title.sort()];
        chageTitle(copy);
      }}>가나다순으로 정렬</button>

      <button onClick={()=>{

        let copyTitle = [...title]; // 전개구문을 해준 이유는 state 특징이 복사를 할때 기존과 신규가 아예 같다면 변경을 안해줌 메모리 낭비임으로 이 같음의 기준은 객체를 기준으로 괄호의 주소값이 같으면 같다고 봄 js 에서도 그냥 복사를 하면 true 가 뜸
        copyTitle[0] = '여자 코트 추천';
        chageTitle(copyTitle);

        }}>성별 변경</button>

        <List data={title}/>

        <Modal />

    </div>
  );
}

function Modal() {
  return(
    <div className="modal1">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세 내용</p>
    </div>
  )
}

function List(props) {

  let [like, likeBtn] = useState([0, 0, 0]);
  function addLike (index) {
    let tempArr = [];
    let testArr = like.forEach((el, idx) => {
        if (idx === index) {
            tempArr.push(like[idx] + 1);
        } else {
            tempArr.push(like[idx]);
      }
    });
    console.log(tempArr)
    return likeBtn([...tempArr]);
};

//! 무한루프에 빠지는 이유
//

  // console.log(title)
  // console.log(like[0])
  return (

    props.data.map((el, index) => { 
      {console.log(like[index])}
      return (
      <div className="list" >
        <h3>{el} <span onClick={addLike(index)}>🌟</span> 
        {like[index]} </h3>
        <p>2월 17일 발행</p>
      </div> 
      )
    })
  )
}


export default App;
