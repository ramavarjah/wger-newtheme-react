import ReactDOM from "react-dom";
//import { Router, Route, Link, browserHistory, IndexRoute } from "react-router";
import DashboardGrid from "../component/DashboardGrid"
import React, { Component } from "react";
import UserProfile from "../component/UserProfile";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from '../containers/Dashboard'

export default class MenuRoutes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <Router>
               <Switch>
                <Route exact path ="/Userprofile"
                render={() =><UserProfile/>}
                ></Route>
               <Route exact path ="/DashboardGrid"
                render={() =><DashboardGrid/>}
                ></Route>
              </Switch>
              </Router>
              </div> 
         
     );
    }
  }