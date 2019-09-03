import React, { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StateProvider } from "./StateContext";
const Home = lazy(() => import("./pages/Home"));
const MovieDetails = lazy(() => import("./components/MovieDetails"));
const SearchMovieComponent = lazy(() =>
  import("./components/SearchMovieComponent")
);
function App() {
  return (
    <StateProvider>
      <Router>
        <Suspense fallback={<div>loading...</div>}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/moviesearch" exact component={SearchMovieComponent} />
            <Route path="/movie/:id" component={MovieDetails} />
          </Switch>
        </Suspense>
      </Router>
    </StateProvider>
  );
}

export default App;
