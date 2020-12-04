import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import App from "./App"
import NotFound from "./components/NotFound"
import "./index.css"
import AboutPage from "./Pages/AboutPage"
import SignIn from "./Pages/Signin"
import Signup from "./Pages/Signup"

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={Signup} />
        <Route path="/about" component={AboutPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default Routing
