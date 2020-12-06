import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./Pages/App";
import NotFound from "./components/NotFound";
import "./styles/index.css";
import AboutPage from "./Pages/AboutPage";
import SignIn from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Admin/Dashboard";

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={Signup} />
        <Route path="/about" component={AboutPage} />
        <Route path="/admin" component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routing;
