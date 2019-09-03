import React, { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StateProvider } from "./StateContext";
import ErrorBoundary from "./components/ErrorBoundary";
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
            <ErrorBoundary>
              <Route path="/" exact component={Home} />
            </ErrorBoundary>
            <ErrorBoundary>
              <Route
                path="/moviesearch"
                exact
                component={SearchMovieComponent}
              />
            </ErrorBoundary>
            <ErrorBoundary>
              {" "}
              <Route path="/movie/:id" component={MovieDetails} />
            </ErrorBoundary>
          </Switch>
        </Suspense>
      </Router>
    </StateProvider>
  );
}

export default App;
