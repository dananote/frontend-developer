import React from 'react'
import ImgItem from './ImgItem'

export default function ImgList({ImgData}) {
    console.log(ImgData)
    return (
        <ul>
            {ImgData.map((el) => {
                return  (
                <li key={el.id}>
                    <ImgItem img={el}/>
                </li>)
            })}
        </ul>
    )
}
