import React from "react";
import Header from "../components/Header";
import MovieComponent from "../components/MovieComponent";
// import { StateProvider } from "../StateContext";
const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <MovieComponent />
    </React.Fragment>
  );
};

export default Home;
