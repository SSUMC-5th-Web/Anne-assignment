import React from 'react';
import { useNavigate } from 'react-router-dom';



const Movie = (props) => {
  const navigate = useNavigate();

  const onClickImg = ()=>{
    navigate(`/movie/${props.title}`, {
      state:props
    })
  }
  
  return (
    <>
        <div className="movie-card" onClick={onClickImg}>
            <div className="movie-image">
                <img src={props.poster_path} alt="poster"/>
            </div>
            <div className="movie-title">
                <h3>{props.title}</h3>
                <span>{props.vote_average}</span>
            </div>


        </div>
    </>
  )
}

export default Movie