import React from "react";
import {HashRouter as Router, Route} from "react-router-dom";
import App from "./Components/App";
import Friends from "./Components/Friends";

const AppRouter = () => (
  <Router basename="/">
    <Route path="/">
      <App>
        <Route path="/friends" component={Friends}></Route>
      </App>
    </Route>
  </Router>
);
export default AppRouter;
