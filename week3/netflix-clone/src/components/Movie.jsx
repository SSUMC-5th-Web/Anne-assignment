import React from 'react'

const Movie = (props) => {
  return (
    <>
        <div className="movie-card">
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