import React, { useContext } from "react";
import Header from "../components/Header";
import MovieComponent from "../components/MovieComponent";
import SearchMovieComponent from "../components/SearchMovieComponent";
import { StateContext } from "../StateContext";
const Home = () => {
  const [state] = useContext(StateContext);
  return (
    <React.Fragment>
      <Header />
      {state.isSearching ? (
        <div>
          <Header />
          <SearchMovieComponent />
        </div>
      ) : (
        <MovieComponent />
      )}
    </React.Fragment>
  );
};

export default Home;
