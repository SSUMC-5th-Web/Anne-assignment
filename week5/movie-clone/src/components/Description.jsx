import React from 'react'

const Description = (props) => {
  return (
    <div className="movie-description">
        <h3>{props.title}</h3>
        <p>{props.overview}</p>
    </div>
  )
}

export default Description