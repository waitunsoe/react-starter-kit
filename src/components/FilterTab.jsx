import React, { useEffect } from "react";

const FilterTab = ({
  setFilterMovies,
  popularMovies,
  activeGenre,
  setActiveGenre,
}) => {
  useEffect(() => {
    if (activeGenre === 0) {
      return setFilterMovies(popularMovies);
    }
    const filterMovies = popularMovies.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );
    setFilterMovies(filterMovies);
  }, [activeGenre]);
  return (
    <div className="flex flex-wrap gap-10">
      <button
        onClick={() => setActiveGenre(0)}
        className="border py-3 w-40 bg-sky-600 text-white rounded-md shadow-md"
      >
        All
      </button>
      <button
        onClick={() => setActiveGenre(28)}
        className="border py-3 w-40 bg-sky-600 text-white rounded-md shadow-md"
      >
        Action
      </button>
      <button
        onClick={() => setActiveGenre(35)}
        className="border py-3 w-40 bg-sky-600 text-white rounded-md shadow-md"
      >
        Comedy
      </button>
    </div>
  );
};

export default FilterTab;
