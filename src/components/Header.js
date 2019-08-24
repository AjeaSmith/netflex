import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import SearchComponent from "./SearchComponent";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  }
}));
const Header = ({ path }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ backgroundColor: "black", marginBottom: "50px" }}
      >
        <Toolbar>
          <Typography
            className={classes.title}
            variant="h6"
            noWrap
            style={{ color: "red" }}
          >
            <Link to="/" style={{ color: "red", textDecoration: "none" }}>
              Netflex
            </Link>
          </Typography>
          <SearchComponent />
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;
