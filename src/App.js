// src/App.js
import React, { useState } from 'react'
import './App.css'
import MovieList from './components/MovieList'
import Filter from './components/Filter'

// default movies to load on the page on page load
const defaultMovies = [
  {
    title: 'Inception',
    description: 'A mind-bending thriller about dream manipulation.',
    posterURL:
      'https://image.tmdb.org/t/p/w500/8iJgdB2t5hPYMZ7O2xfkPRXjPqF.jpg',
    rating: 9,
  },
  {
    title: 'The Dark Knight',
    description: 'Batman faces off against the Joker in a gritty city.',
    posterURL:
      'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    rating: 9.1,
  },
  {
    title: 'The Game of Thrones',
    description: 'Battle among family heads and thrones',
    posterURL:
      'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    rating: 9,
  },
  // Add more movies as needed
]

// App component
const App = () => {
  const [movies, setMovies] = useState(defaultMovies)
  const [filteredMovies, setFilteredMovies] = useState(movies)

  // function to filter movies based on title or rating
  const handleFilter = (title, rating) => {
    const filtered = movies.filter(
      (movie) =>
        (title === '' ||
          movie.title.toLowerCase().includes(title.toLowerCase())) &&
        (rating === '' || movie.rating >= rating)
    )
    setFilteredMovies(filtered)
  }

  // function to add movie to list of movies or filteredmovies
  const addMovie = (movie) => {
    setMovies([...movies, movie])
    setFilteredMovies([...movies, movie])
  }

  return (
    <div className='App'>
      <h1>My Movie App</h1>
      <Filter onFilter={handleFilter} />
      <MovieList movies={filteredMovies} />

      <button
        onClick={() =>
          addMovie({
            title: 'Interstellar',
            description:
              'A team of explorers travel through a wormhole in space.',
            posterURL:
              'https://image.tmdb.org/t/p/w500/8fgV7pzVFX0n4bbx1s7Bcbz9eqv.jpg',
            rating: 10,
          })
        }
      >
        Add Interstellar
      </button>
    </div>
  )
}

export default App
