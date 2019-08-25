import React, { useContext } from "react";
import Header from "../components/Header";
import MovieComponent from "../components/MovieComponent";
import SearchMovieComponent from "../components/SearchMovieComponent";
import { StateContext } from "../StateContext";
import "../App.css";
const Home = () => {
  const [state] = useContext(StateContext);
  return (
    <React.Fragment>
      <Header />
      {state.isSearching ? <SearchMovieComponent /> : <MovieComponent />}
    </React.Fragment>
  );
};

export default Home;
