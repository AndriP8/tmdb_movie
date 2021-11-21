import React, { Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
const HomePage = React.lazy(() => import("./pages/Home"));
const SearchPage = React.lazy(() => import("./pages/Search"));

function App() {
  return (
    <div className="App">
      <Suspense
        fallback={
          <div className="text-center text-lg flex items-center justify-center my-auto h-screen">
            Loading...
          </div>
        }
      >
        <Router>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/search" component={SearchPage}></Route>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
