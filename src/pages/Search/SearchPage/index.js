import React, { useEffect, useState } from "react";
import queryString from "query-string";
import SearchMovie from "./SearchMovie";
import { getSearchMovie } from "../../../services/movie";

function Search() {
  const path = queryString.parse(window.location.search);
  const [movies, setMovies] = useState([null]);

  useEffect(() => {
    (async () => {
      const getMovies = await getSearchMovie(path.q);
      setMovies(getMovies.data.results);
    })();
  }, [path.q]);

  return (
    <section className="bg-black px-16 min-h-screen text-white">
      <div className="container font-inter pt-8 pb-16">
        <h2 className="py-8 text-4xl font-bold">
          Showing all results for{" "}
          <span>
            <i>{path.q}</i>
          </span>
        </h2>
        <div className="movies">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-items-end">
            {movies?.map((item) => (
              <SearchMovie movie={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Search;
