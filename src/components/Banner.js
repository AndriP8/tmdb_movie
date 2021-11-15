import { useCallback, useEffect, useState } from "react";
import { getPopularMovie } from "../services/movie";
import { StarIcon } from "@heroicons/react/solid";

function MainBanner() {
  const [movie, setMovie] = useState({});

  const getPopular = useCallback(async () => {
    const response = await getPopularMovie();
    const local = localStorage.getItem("banner");
    if (local) {
      setMovie(JSON.parse(local));
    } else {
      setMovie(response.data.results[0]);
    }
  }, []);

  useEffect(() => {
    getPopular();
  }, [getPopular]);

  const API_IMG = process.env.REACT_APP_API_IMG;

  return (
    <section className="h-[60vh] md:h-[90vh] relative">
      <div className="absolute z-[-1] inset-0 h-full w-full">
        {!movie?.backdrop_path ? (
          <img
            src={`${API_IMG}/${movie?.poster_path}`}
            className="h-full w-full object-fill"
            alt="banner"
          />
        ) : (
          <img
            src={`${API_IMG}/${movie?.backdrop_path}`}
            className="h-full w-full object-fill"
            alt="banner"
          />
        )}
      </div>
      <div className="px-16 w-full absolute top-5 sm:top-36 bottom-5">
        <div className="text-white font-roboto">
          <h2 className="text-4xl md:text-5xl font-bold">{movie?.title}</h2>
          <p className="text-lg sm:text-2xl font md:pr-40 my-6">
            {movie?.overview}
          </p>
          <div className="flex items-center">
            <StarIcon className="h-7 w-7 mr-2" />
            <span className="text-xl font-bold">{movie?.vote_average}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainBanner;
