import React from "react";

const PopularMovie = ({ popularMovie }) => {
  return (
    <div className="rounded shadow">
      <img
        className=" w-full"
        src={`https://image.tmdb.org/t/p/w500/${popularMovie.backdrop_path}`}
      />
      <div className="p-3">
        <h1 className=" text-lg font-semibold">{popularMovie.original_title}</h1>
      </div>
    </div>
  );
};

export default PopularMovie;
