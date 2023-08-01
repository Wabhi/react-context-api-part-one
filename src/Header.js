import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Header = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div className="header">
      <h3>ABHISHEK TIWARI</h3>
      <h3>NUMBER OF MOVIES : {movies.length}</h3>
    </div>
  );
};

export default Header;
