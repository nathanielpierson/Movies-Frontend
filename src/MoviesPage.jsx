import { MoviesIndex } from './MoviesIndex.jsx'
import axios from 'axios'
import { useState, useEffect } from 'react'

export function MoviesPage () {
  const movies = 0;
  const handleShow = 0;
return (
<MoviesIndex movies={movies} onShow={handleShow} />
)
}