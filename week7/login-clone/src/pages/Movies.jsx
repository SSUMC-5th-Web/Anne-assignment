import React from 'react'
import Movie from "../components/Movie";
import {movies} from "../movieDummy.js";

const Movies = () => {
  return (
    <div className="movies-container">
      {movies.results.map((item, index)=>{
        return(
          <Movie poster_path={item.poster_path} title={item.title} vote_average={item.vote_average} overview={item.overview} key={index}/>
        )
      })}
    </div>
  )
}

export default Movies