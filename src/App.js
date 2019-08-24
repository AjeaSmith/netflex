import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./components/MovieDetails";
import SearchMovieComponent from "./components/SearchMovieComponent";
import { StateProvider } from "./StateContext";
function App() {
  return (
    <StateProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/moviesearch" exact component={SearchMovieComponent} />
          <Route path="/movie/:id" component={MovieDetails} />
        </Switch>
      </Router>
    </StateProvider>
  );
}

export default App;
