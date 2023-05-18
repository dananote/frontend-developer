import React from 'react'
import { useState } from 'react'
import './Main.css'

export default function Main(props) {

    const [expert, setExpert] = useState('');
    const {traningTime, setTime} = useState(0);
    const {dDay, setDday} = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        setDday(Math.ceil(10000 / traningTime));
    }

    return (
        <main>
            <h2 className="a11y">필요한 시간 알아보기</h2>
            <form className="cont-input" onSubmit={handleSubmit}>
                <p>나는
                    <input type="text" value={expert} required onChange={(event) => setExpert(event.target.value)} />
                    전문가가 될것이다.</p>
                <p>그래서 앞으로 매일 하루에
                    <input type="number" value={traningTime} required onChange={(event) => setTime(event.target.value)}/>
                    시간씩 훈련할 것이다.</p>
                <button type="submit" className="btn-exc">나는 며칠동안 훈련을 해야 1만시간이 될까?</button>
            </form>

            {dDay && <section className="cont-result">
                <h3 className="a11y">결과 확인</h3>
                <p className="txt-wannabe">
                    당신은 <strong>{expert}</strong> 전문가가 되기 위해서<br />
                    대략 <strong>{dDay}</strong> 이상 훈련하셔야 합니다! :&#41;
                </p>
                <button type="button" className="btn-go" onClick={props.modalOpen}>훈련하러가기 GO!GO!</button>
                <button type="button" className="btn-share">공유하기</button>
            </section>}
        </main>
    )
}
