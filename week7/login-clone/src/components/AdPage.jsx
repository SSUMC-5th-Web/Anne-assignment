import React, { useState } from 'react'
import Ad from './Ad'

const AdPage = () => {
    const [viewAd, setViewAd] = useState(0);

    const changeViewAd = function(){
        setViewAd(!viewAd);
    }

    return (
        <div className='AdPage-container'>
            <Ad show={viewAd}/>
            <button onClick={changeViewAd}>{viewAd ? '광고 안 보기' : '광고 보기'}</button>
        </div>
    )
}

export default AdPage