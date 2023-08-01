import React, { useContext, useState } from "react";
import { MovieContext } from "./MovieContext";

const AddMovie = () => {
  const [moviename, setMoviename] = useState("");
  const [actorname, setActorname] = useState("");
  const [movierating, setMovierating] = useState("");

  const [movies, setMovies] = useContext(MovieContext);

  const handleMovieNameChange = (e) => {
    setMoviename(e.target.value);
  };

  const handleActorNameChange = (e) => {
    setActorname(e.target.value);
  };

  const handleMovieRatingChange = (e) => {
    setMovierating(e.target.value);
  };

  const handleAddMovie = (e) => {
    e.prevent.default();
    setMovies((prev) => [
      ...prev,
      { name: moviename, rating: movierating, actor: actorname }
    ]);
  };
  return (
    <div className="form-container">
      <form className="movie-form" onSubmit={handleAddMovie}>
        <input
          type="text"
          value={moviename}
          name="moviename"
          onChange={handleMovieNameChange}
          placeholder="movie name"
        />
        <input
          type="text"
          value={actorname}
          name="actorname"
          onChange={handleActorNameChange}
          placeholder="actor name"
        />
        <input
          type="text"
          value={movierating}
          onChange={handleMovieRatingChange}
          placeholder="movie rating"
          name="movierating"
        />
        <button>ADD MOVIE</button>
      </form>
    </div>
  );
};

export default AddMovie;
