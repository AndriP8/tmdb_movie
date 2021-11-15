export const SEARCH_MOVIE = "SEARCH_MOVIE";

export const searchMovie = (payload) => {
  return {
    type: SEARCH_MOVIE,
    payload,
  };
};
