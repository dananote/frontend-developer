import React from 'react'

export default function ImgItem( {img} ) {
    return (
        <img src={img.download_url} alt="" style={{width: 500}}/>
    )
}
