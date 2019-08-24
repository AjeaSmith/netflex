// import React, { useContext } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
// import { StateContext } from "../StateContext";
// import { Link } from "react-router-dom";
// const useStyles = makeStyles({
//   card: {
//     width: 400,
//     minHeight: 430,
//     backgroundColor: "black",
//     color: "white",
//     marginBottom: "10px",
//     marginRight: "10px"
//   },
//   media: {
//     height: 250
//   }
// });
// const MovieItemComponent = () => {
//   const classes = useStyles();
//   const [state] = useContext(StateContext);
//   return (
//     <React.Fragment>
//       <section style={{ display: "flex", flexWrap: "wrap" }}>
//         {state.movies.map(movie => {
//           return (
//             <Card className={classes.card} key={movie.id}>
//               <CardActionArea>
//                 <CardMedia
//                   className={classes.media}
//                   image={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
//                   title="Contemplative Reptile"
//                 />
//                 <CardContent>
//                   <Typography gutterBottom variant="h5" component="h2">
//                     {movie.title}
//                   </Typography>
//                   <Typography variant="body1" component="p">
//                     {movie.release_date}
//                   </Typography>
//                 </CardContent>
//               </CardActionArea>
//               <CardActions>
//                 <Button>
//                   <Link
//                     style={{
//                       color: "#b71c1c",
//                       textDecoration: "none"
//                     }}
//                     to={`/movie/${movie.id}`}
//                   >
//                     View Movie
//                   </Link>
//                 </Button>
//               </CardActions>
//             </Card>
//           );
//         })}
//       </section>
//     </React.Fragment>
//   );
// };
// export default MovieItemComponent;
