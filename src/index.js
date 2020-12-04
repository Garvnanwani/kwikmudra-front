import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import NotFound from "./components/NotFound";
import reportWebVitals from "./reportWebVitals";

import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import AboutPage from "./Pages/AboutPage";
import SignIn from "./Pages/Signin";
import Signup from "./Pages/Signup";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#DF6B57",
    },
  },
});

const routing = (
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={Signup} />
        <Route path="/about" component={AboutPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </ThemeProvider>
);

ReactDOM.render(
  // <React.StrictMode>routing </React.StrictMode>,
  routing,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
