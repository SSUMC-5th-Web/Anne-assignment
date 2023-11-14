import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

const MovieDetail = () => {
    const {title} = useParams();
    const {state} = useLocation();

    console.log(title);
    console.log(state);

  return (
    <div className='page-container' style={{backgroundColor:"#282c52", height:"100%"}}>
        <div className='movie-detail'>
            <img className='detail-img'
                src={state.poster_path} 
                alt='영화 포스터 이미지'
            />
            <div className="detail-description">
              <span className='detail-overview'>⭐️ {state.vote_average}</span>
              <div className='detail-title'>{title}</div>
              <p className='detail-overview'>{state.overview}</p>

            </div>
        </div>
    </div>
  )
}

export default MovieDetail