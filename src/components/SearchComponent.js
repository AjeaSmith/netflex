import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { StateContext } from "../StateContext";
import axios from "axios";
const useStyles = makeStyles(theme => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 220,
      "&:focus": {
        width: 320
      }
    }
  }
}));
const SearchComponent = props => {
  let [state, setState] = useContext(StateContext);
  const classes = useStyles();
  const onChange = e => {
    setState({ ...state, text: e.target.value });
  };
  const onSubmit = e => {
    e.preventDefault();
    setState({ ...state, isLodaing: true });
    if (props.match.path === "/") {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=51909af9c93f13c40080f6829386de2b&language=en-US&query=${state.text}`
        )
        .then(resp => {
          setState({
            ...state,
            movies: resp.data.results,
            searchTitle: state.text,
            text: ""
          });
          props.history.push("/moviesearch");
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=51909af9c93f13c40080f6829386de2b&language=en-US&query=${state.text}`
        )
        .then(resp => {
          setState({
            ...state,
            movies: resp.data.results,
            searchTitle: state.text,
            // isSearching: true,
            text: ""
          });
          props.history.push("/moviesearch");
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
  return (
    <React.Fragment>
      <form onSubmit={onSubmit}>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            value={state.text}
            onChange={onChange}
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      </form>
    </React.Fragment>
  );
};

export default withRouter(SearchComponent);
