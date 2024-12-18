// src/components/Filter.js
import React, { useState } from 'react'

// Filter component that filters by title and rating
const Filter = ({ onFilter }) => {
  const [title, setTitle] = useState('')
  const [rating, setRating] = useState('')

  // function that handles filtering movies
  const handleFilter = () => {
    onFilter(title, rating)
  }

  return (
    <div className='filter'>
      <input
        type='text'
        placeholder='Search by title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type='number'
        placeholder='Filter by rating'
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        min='1'
        max='10'
      />
      <button onClick={handleFilter}>Filter</button>
    </div>
  )
}

export default Filter
