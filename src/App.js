import React from "react";
import "./pages/homepage/homepage.styles.scss";
import HomePage from "./pages/homepage/homepage.component.jsx";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";

const HatsPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/hats" component={HatsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
