import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import App from "./App"
import NotFound from "./components/NotFound"
import "./index.css"
import AboutPage from "./Pages/AboutPage"
import SignIn from "./Pages/Signin"
import Signup from "./Pages/Signup"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#DF6B57",
    },
  },
})

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
)

ReactDOM.render(routing, document.getElementById("root"))
