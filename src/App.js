import MainBanner from "./components/Banner";
import Navbar from "./components/Header";
import Movie from "./components/Movie";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainBanner />
      <Movie />
    </div>
  );
}

export default App;
