import React from "react";
import "./pages/homepage/homepage.styles.scss";
import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from './pages/shop/shop.component.jsx';
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
