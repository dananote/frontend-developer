import './App.css';
import Menu from './components/menu/menu.jsx'
import Triplist from './components/tripList/TripList'


function TextArea() {
  return (
    <div className="wrapper">
      <textarea
        readOnly
        maxLength={3}
        style={{backgroundColor: "blue"}}
      />
    </div>
  );   
}
 // 1. class => calaName
 // 2. maxlength=3 => maxlength={3}
 // 3. 카멜케이스 기법으로 스타일 키값 입력
 // 4. 스타일 중괄호로 한번더 감싸ㅣ
 // 5. 스타일 안에 전체 따옴표 값에 만 감싸고 세미클론빼기

function App() {
  const name = '라이캣!'
  const 변수 = 'value';
  function 함수 () {
    console.log('함수!')
  }
  const 값 = true;
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const date = today.getDate();
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();


  return (

    <div className="App"> 
        {`${[1, 2, 3]}`}
        {100 + 1}
        {'hello' + 'world'}
        {[1, 2, 3].map(x => x**2)}
        {함수()}
        {변수}
        {값?'one':'two'}
        <TextArea />
        <Menu />
        <h1>안녕{name}</h1>
        <p className="today">{year}년{month + 1}월{date}일</p>
        <p className="today">{hour}시{min}분{sec}초</p>


        {/* 내가 푼 정답 */}
        {/* <table className="table">
          <tr style={list[0].visited ? {backgroundColor:'#274AFF'} : {backgroundColor:'#dddddd'}}>{list[0].area}</tr>
          <tr style={list[1].visited ? {backgroundColor:'#274AFF'} : {backgroundColor:'#dddddd'}}>{list[1].area}</tr>
          <tr style ={list[2].visited ? {backgroundColor:'#274AFF'} : {backgroundColor:'#dddddd'}}>{list[2].area}</tr>
          <tr style={list[3].visited ? {backgroundColor:'#274AFF'} : {backgroundColor:'#dddddd'}}>{list[3].area}</tr>
        </table> */}


        <Triplist />


    </div>
  );
}

export default App;
