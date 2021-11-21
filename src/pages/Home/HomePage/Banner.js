import { useEffect, useState } from "react";
import { getPopularMovie } from "../../../services/movie";
import { StarIcon } from "@heroicons/react/solid";

function MainBanner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    (async () => {
      const getPopular = await getPopularMovie();
      const local = localStorage.getItem("banner");
      if (local) {
        setMovie(JSON.parse(local));
      } else {
        setMovie(getPopular.data.results[0]);
      }
    })();
  }, [movie]);

  const API_IMG = process.env.REACT_APP_API_IMG;

  return (
    <section className="h-[60vh] sm:h-[75vh] relative width-container">
      <div className="flex h-full">
        <div className="bg-medBlack absolute top-0 xl:right-[55%] lg:right-[59%] md:right-[80%]  bottom-0 left-0" />
        <div className="lg:w-[62vw] w-full max-w-[100vw] absolute top-0 right-0 bottom-0 z-[-1]">
          {movie?.backdrop_path ? (
            <img
              src={`${API_IMG}/${movie?.backdrop_path}`}
              className="h-full w-full object-fill"
              alt="banner"
            />
          ) : (
            <img
              src={`${API_IMG}/${movie?.poster_path}`}
              className="h-full w-full object-fill"
              alt="banner"
            />
          )}
        </div>
      </div>
      <div className="max-w-[700px] w-full h-full hidden md:flex items-center justify-center absolute top-0">
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
