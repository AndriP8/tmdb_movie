import callAPI from "./index";

const API_KEY = process.env.REACT_APP_API_KEY;
const ROOT_API = process.env.REACT_APP_ROOT_API;

export const getPopularMovie = async () => {
  const url = `${ROOT_API}/movie/popular?api_key=${API_KEY}`;

  return callAPI({
    url,
    method: "GET",
  });
};
