import React, { useContext, useState } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

const MoviesList = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <>
      {movies.map((movie) => {
        return (
          <Movie
            name={movie.name}
            key={movie.id}
            rating={movie.rating}
            actor={movie.actor}
          />
        );
      })}
    </>
  );
};

export default MoviesList;
