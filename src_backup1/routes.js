import React from "react";
import { Route } from "react-router-dom";
import Hoc from "./hoc/hoc";

import Login from "./containers/Login";
import Signup from "./containers/Signup";
import MenuRoutes from "./Routes/Dashboardroutes"
import HomepageLayout from "./containers/Home";
import Dashboard from "./containers/Dashboard";
import UserProfile from "./component/UserProfile";
import {BrowserRouter as Router, Switch } from "react-router-dom";
// import Workout from "./component/Workout";
import SiderDemo from "./containers/SideNav"
import { Row } from "antd";

const BaseRouter = () => (
  <div>
    {/* <Row>
<SiderDemo></SiderDemo>
</Row> */}
  <Hoc>
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    {/* <Route path="/Workout" component={Workout}/> */}

    <Route exact path="/" component={Dashboard} />
    {/* <Route exact path = "/UserProfile" component={UserProfile}/>
    <Route exact path = "/Dashboard" component={Dashboard}/> */}
  </Hoc>
     {/* <Router> 
      <Switch>
    <Route exact path ="/Userprofile" component={UserProfile}></Route>
    <Route exact path ="/Dashboard" component={Dashboard}></Route>
    </Switch>
    </Router> */}
  </div>
);

export default BaseRouter;
