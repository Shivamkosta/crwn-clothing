import React from "react";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";

const HomePage = (props) => {
  console.log(props);
  return (
    <div>
      <Link to="/topics">Topics</Link>
      <h1>HOME PAGE</h1>
    </div>
  );
};
const TopicsList = (props) => {
  console.log(props);
  return (
    <div>
      <Link to={`${props.match.url}/13`}>TO TOPIC 13</Link>
      <Link to={`${props.match.url}/14`}>TO TOPIC 14</Link>
      <Link to={`${props.match.url}/15`}>TO TOPIC 15</Link>
      <h1>TOPIC LIST PAGE</h1>
    </div>
  );
};
const TopicsDetail = (props) => {
  console.log(props);
  return (
    <div>
      <button
        onClick={() => {
          props.history.push("/");
        }}
      >
        Home
      </button>
      <h1>TOPIC DETAIL PAGE: {props.match.params.topicId}</h1>
    </div>
  );
};

function Dynamic() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/topics" component={TopicsList} />
          <Route exact path="/topics/:topicId" component={TopicsDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default Dynamic;
