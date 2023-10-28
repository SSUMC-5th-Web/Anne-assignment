import React, { useState } from 'react';
import Description from './Description';
import { MovieCard, MovieImage, MovieTitleContainer, MovieTitle } from './Movie.style.jsx';


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
        <MovieCard onMouseOver={showDescription} onMouseOut={closeDescription}>
          <MovieImage src={props.poster_path} alt="poster"></MovieImage>
          <MovieTitleContainer>
            <MovieTitle>{props.title}</MovieTitle>
            <span>{props.vote_average}</span>
          </MovieTitleContainer>

          {description && <Description title={props.title} overview={props.overview}/>}

        </MovieCard>

    </>
  )
}

export default Movie