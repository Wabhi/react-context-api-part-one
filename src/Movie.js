import React from "react";

const style = {
  display: "flex",
  flexDirection: "row",
  gap: "10px"
};
const Movie = (props) => {
  return (
    <>
      <div style={style}>
        <h1>{props.name}</h1>
        <h3>{props.actor}</h3>
        <h4>{props.rating}</h4>
      </div>
      <hr />
    </>
  );
};

export default Movie;
