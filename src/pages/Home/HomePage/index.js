import { useEffect, useState } from "react";
import { getPopularMovie } from "../../../services/movie";
import PopularMovie from "./PopularMovie";

function Movie() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    (async () => {
      const popularMovie = await getPopularMovie();
      setMovie(popularMovie.data.results);
    })();
  }, []);

  return (
    <section className="bg-black px-16 h-full text-white">
      <div className="container font-inter pt-8 pb-16">
        <h2 className="py-8 text-4xl font-bold">Popular Movies</h2>
        <div className="movies">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-items-end">
            {movie.map((item) => (
              <PopularMovie movie={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Movie;
