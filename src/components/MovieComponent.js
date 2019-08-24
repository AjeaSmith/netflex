import React, { useEffect, useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Typography } from "@material-ui/core";
import { StateContext } from "../StateContext";
import axios from "axios";
const useStyles = makeStyles({
  card: {
    width: 400,
    minHeight: 430,
    backgroundColor: "black",
    color: "white",
    marginBottom: "10px",
    marginRight: "10px"
  },
  media: {
    height: 250
  }
});
const MovieComponent = () => {
  let [state, setState] = useContext(StateContext);
  let [menu, setMenu] = useState();
  const classes = useStyles();
  const handleClick = event => {
    setMenu((menu = event.currentTarget));
  };
  const handleClose = () => {
    setMenu((menu = null));
    const fetchPopular = () => {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/popular?api_key=51909af9c93f13c40080f6829386de2b&language=en-US&page=1"
        )
        .then(resp => {
          setState({ ...state, movies: resp.data.results });
        })
        .catch(err => {
          console.log(err);
        });
    };
    fetchPopular();
  };
  const handleMenu = () => {
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
              onClose={handleMenu}
            >
              <MenuItem onClick={handleClose}>Popularity</MenuItem>
            </Menu>
          </div>
        </section>
        <section style={{ display: "flex", flexWrap: "wrap" }}>
          {state.movies.map(movie => {
            return (
              <Card className={classes.card} key={movie.id}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {movie.title}
                    </Typography>
                    <Typography variant="body1" component="p">
                      {movie.release_date}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button>
                    <Link
                      style={{
                        color: "#b71c1c",
                        textDecoration: "none"
                      }}
                      to={`/movie/${movie.id}`}
                    >
                      View Movie
                    </Link>
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </section>
      </div>
    </React.Fragment>
  );
};

export default MovieComponent;
