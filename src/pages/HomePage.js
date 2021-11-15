import MainBanner from "../components/Banner";
import Navbar from "../components/Header";
import Movie from "../components/HomePage";

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
