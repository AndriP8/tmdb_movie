import MainBanner from "./HomePage/Banner";
import Navbar from "../../components/Header";
import Movie from "./HomePage";

function HomePage() {
  return (
    <>
      <Navbar />
      <MainBanner />
      <Movie />
    </>
  );
}

export default HomePage;
