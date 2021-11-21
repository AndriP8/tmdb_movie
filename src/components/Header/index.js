import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { SearchIcon } from "@heroicons/react/outline";
function Navbar() {
  const router = useHistory();

  const [searchValue, setSearchValue] = useState("");

  const onSearch = (e) => {
    e.preventDefault();
    router.push(`/search?q=${searchValue}`);
  };

  return (
    <div className="bg-primary text-white font-inter h-24 w-full width-container">
      <div className="flex justify-between items-center h-full">
        <div>
          <a href="/" className="text-5xl font-bold mr-4 md:mr-0">
            Vilm
          </a>
        </div>
        <div className="relative">
          <form action="" onSubmit={onSearch}>
            <input
              type="text"
              className="bg-mainTransparent rounded-lg py-2 pr-0 sm:pr-12 pl-4 focus:outline-none focus:ring-2 focus:ring-blue-800 w-full sm:inline-block"
              placeholder="Search Movie"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <SearchIcon className="w-6 h-6 absolute -top-3 right-2 hidden md:inline-block sm:top-2 sm:right-2" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
