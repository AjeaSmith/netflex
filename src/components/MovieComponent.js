import React, { useEffect, useContext, useState } from "react";
import MovieItemComponent from "./MovieItemComponent";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Typography } from "@material-ui/core";
import { StateContext } from "../StateContext";
import axios from "axios";

const MovieComponent = () => {
  let [state, setState] = useContext(StateContext);
  let [menu, setMenu] = useState();

  const handleClick = event => {
    setMenu((menu = event.currentTarget));
  };
  const handleClose = () => {
    setMenu((menu = null));
  };
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=51909af9c93f13c40080f6829386de2b&language=en-US&page=1"
      );
      setState({ ...state, movies: result.data.results });
    };
    fetchData();
  }, []);
  return (
    <React.Fragment>
      <div style={{ padding: "0 24px" }}>
        <section
          style={{
            marginBottom: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <div>
            <Typography variant="h4">Now Playing</Typography>
          </div>
          <div>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              Filter Movies
              <ArrowDropDownIcon />
            </Button>

            <Menu
              id="simple-menu"
              anchorEl={menu}
              keepMounted
              open={Boolean(menu)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Popularity</MenuItem>
            </Menu>
          </div>
        </section>
        <MovieItemComponent />
      </div>
    </React.Fragment>
  );
};

export default MovieComponent;
