import { MoviesIndex } from "./MoviesIndex";
// import { MoviesNew } from "./MoviesNew";
import { MoviesShow } from "./MoviesShow";
import { Modal } from "./Modal";
import axios from "axios";
import { useState, useEffect } from "react";

export function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isMoviesShowVisible, setIsMovieShowVisible] = useState(false);
  const [currentMovie, setCurrentMovie] = useState({});

  const handleIndex = () => {
    console.log("doing something...");
    // get data from rails
    // with a web request
    // Make a request for a user with a given ID
    axios.get("/movies.json").then(function (response) {
      // handle success
      console.log("inside the .then");
      console.log(response.data);
      setMovies(response.data);
    });
    console.log("after the .then");
  };

  const handleShow = (movie) => {
    console.log(movie);
    setCurrentMovie(movie);
    console.log("handling the show...");
    setIsMovieShowVisible(true);
  };

  const closeModal = () => {
    console.log("close the modal....");
    setIsMovieShowVisible(false);
  };

  // const handleCreate = (params) => {
  //   console.log('handle create...');
  //   axios.post("http://localhost:3000/movies.json", params).then(response => {
  //     console.log(response.data)
  //     // make a copy of the origianl recipe array, add the new recipe to it
  //     // reset movies to the new array
  //     setMovies([...movies, response.data])
  //     // window.location.href = '/'
  //   })
  // }

  const handleUpdate = (params, movie) => {
    console.log("hanlding update");
    axios.patch(`/movies/${movie.id}.json`, params).then((response) => {
      console.log(response.data);
      setIsMovieShowVisible(false);
      // loop through movies array
      // find the recipe i want to update
      // swap out the current values for response.data
      setMovies(
        movies.map((r) => (r.id === response.data.id ? response.data : r))
      );
    });
  };

  const handleDestroy = (movie) => {
    console.log("handling detroy...");
    axios.delete(`/movies/${movie.id}.json`).then((response) => {
      console.log(response.data);
      setMovies(movies.filter((r) => r.id !== movie.id));
      setIsMovieShowVisible(false);
    });
  };

  useEffect(handleIndex, []);

  return (
    <div>
      {/* <button onClick={handleIndex}>Get data from rails</button> */}
      {/* <MoviesNew onCreate={handleCreate} /> */}
      <MoviesIndex movies={movies} onShow={handleShow} />
      <Modal show={isMoviesShowVisible} onClose={closeModal}>
        <MoviesShow
          movie={currentMovie}
          onUpdate={handleUpdate}
          onDestroy={handleDestroy}
        />
      </Modal>
    </div>
  );
}
