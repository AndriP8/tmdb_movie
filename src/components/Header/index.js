import { SearchIcon } from "@heroicons/react/outline";

function Navbar() {
  return (
    <div className="bg-primary text-white font-inter h-24 px-16">
      <div className="flex justify-between items-center h-full">
        <div>
          <p className="text-5xl font-bold">Vilm</p>
        </div>
        <div className="relative">
          <input
            type="text"
            className="bg-mainTransparent rounded-lg py-2 pr-12 pl-4 focus:outline-none focus:ring-2 focus:ring-blue-800 hidden sm:inline-block"
            placeholder="Search Movie"
          />
          <SearchIcon className="w-6 h-6 absolute -top-3 right-2 sm:top-2 sm:right-2" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
