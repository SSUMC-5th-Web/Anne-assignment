import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

const MovieDetail = () => {
    const {title} = useParams();
    const {state} = useLocation();

    console.log(title);
    console.log(state);

  return (
    <div className='page-container'>
        <div style={{display:"flex"}}>
            <img 
                style={{width:"300px", height:"450px"}}
                src={state.poster_path} 
                alt='영화 포스터 이미지'
            />
            <div style={{fontSize:"32px"}}>{title}</div>
        </div>
    </div>
  )
}

export default MovieDetail