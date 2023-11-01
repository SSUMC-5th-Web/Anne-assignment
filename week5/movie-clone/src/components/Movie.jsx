import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Description from './Description';


const Movie = (props) => {
  // const [description, setDescription] = useState(false);

  // const showDescription = function(){
    // setDescription(true);
  // }
  // const closeDescription = function(){
    // setDescription(false);
  // }

  
  const navigate = useNavigate();

  const onClickMovieItem = ()=>{
    navigate(`/movie/${props.title}`, {
      state:props
    })
  }
  
  return (
    <>
        <div className="movie-card" onClick={onClickMovieItem}>
            <div className="movie-image">
                <img src={props.poster_path} alt="poster"/>
            </div>
            <div className="movie-title">
                <h3>{props.title}</h3>
                <span>{props.vote_average}</span>
            </div>

            {/* {description && <Description title={props.title} overview={props.overview}/>} */}

        </div>
    </>
  )
}

export default Movie