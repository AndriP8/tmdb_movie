import { useCallback, useEffect, useState } from "react";
import { getPopularMovie } from "../services/movie";

function Movie() {
  const [movie, setMovie] = useState([]);

  const getPopular = useCallback(async () => {
    const response = await getPopularMovie();
    setMovie(response.data.results);
  }, []);

  useEffect(() => {
    getPopular();
  }, [getPopular]);

  const getDataBanner = (value) => {
    window.location.reload(false);
    const movieBanner = JSON.stringify(value);
    localStorage.setItem("banner", movieBanner);
  };

  const API_IMG = process.env.REACT_APP_API_IMG;

  return (
    <section className="bg-black px-16 h-full text-white">
      <div className="container font-inter pt-8 pb-16">
        <h2 className="py-8 text-4xl font-bold">Popular Movies</h2>
        <div className="movies">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-items-end">
            {movie.map((item) => (
              <div
                className="movie w-full rounded-md bg-medBlack cursor-pointer mx-auto hover:scale-[1.15] transition relative overflow-hidden"
                onClick={() => getDataBanner(item)}
              >
                <div>
                  <img
                    src={`${API_IMG}/${item.poster_path}`}
                    className="rounded-md w-full h-[290px]"
                    alt="movie-items"
                  />
                </div>
                <div className="m-3">
                  <p className="text-lg font-bold truncate">
                    {item.original_title}
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-gray-400">{item.release_date}</p>
                    <p className="text-xs text-gray-400 font-bold">
                      {item.vote_average}
                    </p>
                  </div>
                </div>
                <div className="movie-over absolute px-4 py-8 left-0 right-0 bottom-0 transition duration-500 transform translate-y-full ease-in-out bg-medBlack overflow-auto max-h-full rounded-t-md">
                  <p className="font-bold text-2xl">
                    Overview :
                    <span className="block text-base font-normal">
                      {item.overview}
                    </span>
                  </p>
                  <p className="font-bold text-2xl mt-4">
                    Popularity :
                    <span className="block text-base font-normal">
                      {item.popularity}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Movie;
