// src/components/MovieCard.js
import React from 'react'
import interstellarImg from '../assets/interstellar.jpg'

// Movie card component which receives destructured props
const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div className='movie-card'>
      <img src={interstellarImg} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Rating: {rating}</p>
    </div>
  )
}

export default MovieCard
