function SearchMovie(props) {
  const { movie } = props;

  const API_IMG = process.env.REACT_APP_API_IMG;

  return (
    <div className="movie w-full rounded-md bg-medBlack cursor-pointer mx-auto hover:scale-[1.15] transition relative overflow-hidden">
      <div>
        <img
          src={`${API_IMG}/${movie.poster_path}`}
          className="rounded-md w-full h-[290px]"
          alt="movie-items"
        />
      </div>
      <div className="m-3">
        <p className="text-lg font-bold truncate">{movie.original_title}</p>
        <div className="flex justify-between items-center">
          <p className="text-xs text-gray-400">{movie.release_date}</p>
          <p className="text-xs text-gray-400 font-bold">
            {movie.vote_average}
          </p>
        </div>
      </div>
      <div className="movie-over absolute px-4 py-8 left-0 right-0 bottom-0 transition duration-500 transform translate-y-full ease-in-out bg-medBlack overflow-auto max-h-full rounded-t-md">
        <p className="font-bold text-2xl">
          Overview :
          <span className="block text-base font-normal">{movie.overview}</span>
        </p>
        <p className="font-bold text-2xl mt-4">
          Popularity :
          <span className="block text-base font-normal">
            {movie.popularity}
          </span>
        </p>
      </div>
    </div>
  );
}

export default SearchMovie;
