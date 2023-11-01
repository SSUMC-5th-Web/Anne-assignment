import React, { useState } from 'react';
import Description from './Description';


const Movie = (props) => {
  const [description, setDescription] = useState(false);

  const showDescription = function(){
    setDescription(true);
  }
  const closeDescription = function(){
    setDescription(false);
  }
  
  return (
    <>
        <div className="movie-card" onMouseOver={showDescription} onMouseOut={closeDescription}>
            <div className="movie-image">
                <img src={props.poster_path} alt="poster"/>
            </div>
            <div className="movie-title">
                <h3>{props.title}</h3>
                <span>{props.vote_average}</span>
            </div>

            {description && <Description title={props.title} overview={props.overview}/>}

        </div>
    </>
  )
}

export default Movie