import React from 'react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Item = styled.div`
    margin: 60px auto;

    ul {
        padding: 10px;
    }

    li {
        margin: 20px 0;
        border: 1px solid black;
        box-sizing: 10px;
        padding: 10px;
        border-radius: 10px;
        list-style: none;
        box-shadow: 4px 4px 6px rgba(0,0,0,0.1);
    }
`

export default function NationList() {

    const [nations, setNations] = useState([]);
    const [url, setUrl] = useState("http://localhost:3000/nations");

    // useEffect(() => {
    //     fetch("http://localhost:3000/nations")
    //         .then(response => {
    //             // http 상태코드가 200번때가 아닐 경우
    //             if (!response.ok) {
    //                 throw new Error("네트워크 응답에 문제가 있습니다.");
    //             }
    //             return response.json()
    //         })
    //         .then(json => setNations(json))
    //         .catch((error) => {
    //             console.error('데이터를 가져오는데 문제가 발생했습니다 : ', error);
    //         })
    // }, [])

    // console.log(nations);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/nations");

                if (!response.ok) {
                    throw new Error("네트워크 응답에 문제가 있습니다.");
                }
                const json = await response.json();

                setNations(json);
            } catch (error) {
                console.error('데이터를 가져오는데 문제가 발생했습니다 : ', error);
            }
        }

        fetchData();
    }, [url]);

    
  return (
    <Item>
        <ul>
            {nations.map((nation) => {
                return <li key={nation.id}>
                    <h3>나라 이름: {nation.title}</h3>
                    <p>인구 수: {nation.population}</p> 
                </li>
            })}
        </ul>
        <div>
            <button onClick={() => {setUrl("http://localhost:3000/nations?loc=europe")}} >유럽 목록</button>
            <button onClick={() => {setUrl("http://localhost:3000/nations")}} >전체 목록</button>
        </div>
    </Item>
  )
}
