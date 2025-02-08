import { MoviesIndex } from './MoviesIndex.jsx'
import axios from 'axios'
import { useState, useEffect } from 'react'

export function MoviesPage () {
  const [movies, setMovies] = useState([]);
  const [isMoviesShowVisible, setIsMovieShowVisible] = useState(false);
  const [currentMovie, setCurrentMovie] = useState({});

  const handleIndex = () => {
    return (
      axios.get('http://localhost:3000/movies.json')
        .then(function (response) {
        setMovies(response.data)
        } )
      )
  }

  const handleShow = (movie) => {
  setCurrentMovie(movie);
  setIsMovieShowVisible(true);
  };
return (
<MoviesIndex movies={movies} onShow={handleShow} />
)
}