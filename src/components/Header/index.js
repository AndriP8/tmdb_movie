import { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { SearchIcon } from "@heroicons/react/outline";
import { getSearchMovie } from "../../services/movie";
import { useDispatch } from "react-redux";
import { searchMovie } from "../../redux/actionTypes/search";

function Navbar() {
  const dispatch = useDispatch();
  const router = useHistory();

  const [searchValue, setSearchValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const getSearch = useCallback(
    async (value) => {
      const response = await getSearchMovie(value);
      dispatch(searchMovie(response.data.results));
    },
    [dispatch]
  );

  const onSearchChange = (e) => {
    setSearchValue(e.target.value);
    setSearchQuery(e.target.value);
  };

  const onSearch = (e) => {
    e.preventDefault();
    getSearch(searchValue);
    router.push(`/search?q=${searchQuery}`);
  };

  return (
    <div className="bg-primary text-white font-inter h-24 px-16">
      <div className="flex justify-between items-center h-full">
        <div>
          <a href="/" className="text-5xl font-bold">
            Vilm
          </a>
        </div>
        <div className="relative">
          <form action="" onSubmit={onSearch}>
            <input
              type="text"
              className="bg-mainTransparent rounded-lg py-2 pr-12 pl-4 focus:outline-none focus:ring-2 focus:ring-blue-800 hidden sm:inline-block"
              placeholder="Search Movie"
              value={searchValue}
              onChange={(e) => onSearchChange(e)}
            />
            <SearchIcon className="w-6 h-6 absolute -top-3 right-2 sm:top-2 sm:right-2" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
