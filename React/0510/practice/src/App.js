import { useState } from 'react';


//todo 오늘 배운 내용 정리
// 1. usetState hook은 state와 setState를 배열 형태로 리턴함 
// 2. state에는 현재의 상태값이 있고 setState를 사용해서 state를 변경할 수 있다.
// 3. setstate를 사용해서 state를 변경할 때마다 컴포넌트는 다시 렌더링 된다.
// 4. state를 변경할때 새로 변경될 state값이 이전 state와 연관되어 있다면 setstate 인자로 새로운 state를 리턴하는 콜백함수를 넣어주는것이 좋다.
// 5. useState를 사용해서 초기값을 받아올때 어떤 무거운 일을 해야한다면 useState인자로 콜백함 수를 넣어주면 처음 랜더링이 될때만 사용되게 할 수 있다.

//* 클릭하면 시간이 하나씩 올라감 (복습 1번 완료)
// function App() {
//   const [time, setTime] = useState(1);
//   const handleClick = () => {
//     let newTime;
//     if(time >= 12) {
//       newTime = 1;
//     } else {
//       newTime = time + 1;
//     }
//     setTime(newTime)
//   }

//   console.log('업데이트!!');

//   return (
//     <div>
//       <span>현재 시각: {time}시 </span>
//       <button onClick = {handleClick}>Update</button>
//     </div>
//   );
// }

//* 인풋창이 이름을 입력하면 아래에 입력한 이름이 뜸 (복습 1번 완료)
const heavyWork = () => {
  console.log('엄청 무거운 작업')
  return ['홍길동', '김민수']
}

function App() {
  const [names, setNames] = useState(() => {
    return heavyWork();
  });
  const [input, setInput] = useState('')

  const handleInputChange = (event) => {
    setInput(event.target.value);
  }

  const handleUpload = () => {
    setNames((prvState) => {
      return([input, ...prvState])
    })
  }



  return(
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleUpload}>Uploads</button>
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>
      })}
    </div>
  )
}


export default App;
