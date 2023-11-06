import React from 'react'
import AdImage from '../Ad.svg';


const Ad = (props) => {
    if(!props.show){
        return null;
    }

    return (
        <div className='Ad-container'>
            <img style={{width:'100%'}} src={AdImage} alt='AdImage'/>
        </div>
    )
}

export default Ad