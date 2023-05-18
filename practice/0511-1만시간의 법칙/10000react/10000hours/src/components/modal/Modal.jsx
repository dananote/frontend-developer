import React from 'react'
import licat from '../../img/licat.png'
import './Modal.css'

export default function Modal(props) {
    return (
            <aricle id="modal">
                <div className="modal-wrap">
                    <h2>화이팅!!♥♥♥</h2>
                    <h3>당신의 꿈을 응원합니다!</h3>
                    <img src={licat} alt="응원하는 라이캣" />
                    <button class="btn-close" type="button" onClick={props.modalClose}>종료하고 진짜 훈련하러 가기 GO!GO!</button>
                </div>
            </aricle>
    )
}
