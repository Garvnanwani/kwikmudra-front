import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound";
import AboutPage from "./Pages/AboutPage";
import Dashboard from "./Pages/Admin/Dashboard";
import AgentDashboard from "./Pages/Agent/AgentDashboard";
import EmployeeDashboard from "./Pages/Employee/EmployeeDashboard";
import App from "./Pages/App";
import ProdForm from "./Pages/ProdForm";
import SignIn from "./Pages/Signin";
import Signup from "./Pages/Signup";
import EmployeeSignUp from "./Pages/EmployeeSignup";
import AgentRoute from './components/AgentRoute'
import EmployeeRoute from './components/EmployeeRoute'
import AdminRoute from './components/AdminRoute'
import "./styles/index.css";

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={Signup} />
        <Route path="/about" component={AboutPage} />
        <AgentRoute path="/agent" exact component={AgentDashboard} />
        <EmployeeRoute path="/employee" exact component={EmployeeDashboard} />
        <AdminRoute path="/admin/employee/signup" component={EmployeeSignUp} />
        <Route path="/admin" exact component={Dashboard} />
        <Route path="/product/:productName" component={ProdForm} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routing;
