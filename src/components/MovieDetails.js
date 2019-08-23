import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Header from "./Header";
import axios from "axios";

const MovieDetails = ({ match }) => {
  const { id } = match.params;
  let [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchMovie = async () => {
      const result = await axios(
        `https://api.themoviedb.org/3/movie/${id}?api_key=51909af9c93f13c40080f6829386de2b&language=en-US`
      );
      setMovie((movie = result.data));
    };
    fetchMovie();
  }, []);
  const useStyles = makeStyles({
    card: {
      width: 700,
      height: "100%",
      backgroundColor: "black",
      color: "white"
    },
    media: {
      height: 430
    }
  });
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header />
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "15px"
        }}
      >
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {movie.title}
              </Typography>
              <Typography variant="body1" component="p">
                Run Time: {movie.runtime}
              </Typography>
              <Typography variant="body1" component="p">
                {movie.overview}
              </Typography>
              <Typography variant="body1" component="p">
                {movie.release_date}
              </Typography>
              <Typography variant="body1" component="p">
                Rating: {movie.vote_average}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </section>
    </React.Fragment>
  );
};

export default MovieDetails;
