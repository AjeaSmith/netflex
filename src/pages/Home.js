import React, { useState } from "react";
import Header from "../components/Header";
import MovieComponent from "../components/MovieComponent";
const Home = () => {
  const [state, setState] = useState({
    movies: null,
    isLoading: false
  });
  return (
    <React.Fragment>
      <Header />
      <MovieComponent />
    </React.Fragment>
  );
};

export default Home;
