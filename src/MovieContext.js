import React, { createContext, useState } from "react";

export const MovieContext = createContext(null);

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "JACK RYAN",
      actor: "Tom Cruise",
      rating: "8.3",
      id: 1
    },
    {
      name: "MISSION IMPOSIBLE",
      id: 2,
      rating: "8.1",
      actor: "Tom Cruise"
    },
    {
      name: "FASTTX",
      id: 3,
      rating: "7.3",
      actor: "Tom Cruise"
    },
    {
      name: "OPPENHIEMER",
      id: 4,
      rating: "9.1",
      actor: "Cillian Murphy"
    },
    {
      name: "THE COVENANT",
      id: 5,
      rating: "8.4",
      actor: "Jack Gryllehem"
    },
    {
      name: "THE WOLF OF STREET",
      id: 6,
      rating: "8.8",
      actor: "Lenardo D Caprio"
    },
    {
      name: "THE MATRIX",
      id: 7,
      rating: "8.4",
      actor: "KENU REVAN"
    },
    {
      name: "JOHN WICK",
      id: 8,
      rating: "8.8",
      actor: "KENU REVAN"
    }
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
