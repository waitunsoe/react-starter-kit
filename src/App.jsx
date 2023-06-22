import React, { useEffect, useState } from "react";
import "./App.css";
import PopularMovie from "./components/PopularMovie";
import FilterTab from "./components/FilterTab";

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const fetchPopularMovies = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=26b93a297710d34cf10c045c446f91fd&language=en-US&page=1`
    );
    const { results } = await api.json();
    setPopularMovies(results);
    setFilterMovies(results);
  };
  return (
    <div className=" max-w-5xl mx-auto p-5 mt-10">
      <FilterTab
        setFilterMovies={setFilterMovies}
        popularMovies={popularMovies}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        {filterMovies?.map((popularMovie) => (
          <PopularMovie key={popularMovie.id} popularMovie={popularMovie} />
        ))}
      </div>
    </div>
  );
};

export default App;
