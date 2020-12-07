import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import NotFound from "./components/NotFound"
import AboutPage from "./Pages/AboutPage"
import Dashboard from "./Pages/Admin/Dashboard"
import App from "./Pages/App"
import SignIn from "./Pages/Signin"
import Signup from "./Pages/Signup"
import TempForm from "./Pages/TempForm"
import "./styles/index.css"

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={Signup} />
        <Route path="/about" component={AboutPage} />
        <Route path="/admin" component={Dashboard} />
        <Route path="/product/:productName" component={TempForm} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default Routing
