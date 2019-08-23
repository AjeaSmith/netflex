import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route to="/" exact component={Home} />
          <Route to="/moviedetails/:id" component={Details} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
