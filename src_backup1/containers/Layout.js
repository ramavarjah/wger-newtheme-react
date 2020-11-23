import React from "react";
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment
} from "semantic-ui-react";
import '../scss/Layout.css'
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import {Row} from 'antd';
import Wgnerlogo from '../images/logo-bg-white.png'
import FooterWgner from "./Footer";
import 'bootstrap/dist/css/bootstrap.css';

import { Select } from 'antd';

const { Option } = Select;



class CustomLayout extends React.Component {
  render() {
    const { authenticated } = this.props;
    return (
      <div>
        <Menu fixed="top" inverted>
          <Container>
            <Link to="/">
              <Menu.Item header>
                <div style={{position: "relative",top: 0}}>Home</div>
                </Menu.Item>
            </Link>
            <img style={{height: 38, position: "relative", right: 320}} src={Wgnerlogo}></img>
            {/* <div style={{    position: "relative",left: 642,top: 8}}>
            <Select placeholder="Training"  style={{ width: 120, position: "relative", top:5 }} bordered={false}>
      <Option value="jack">Workouts</Option>
      <Option value="lucy">Workshedules</Option>
      <Option value="Yiminghe">Categories</Option>
    </Select>

    <Select placeholder="Nutrition"  style={{ width: 175, position: "relative", top:5 }} bordered={false}>
      <Option value="jack">BMI Calculator</Option>
      <Option value="lucy">Nutrition Plans</Option>
      <Option value="Yiminghe">Daily Calories calculator</Option>
    </Select>
    </div> */}

         {/* <ul style={{    position: "relative",top: 8}} className="navbar-nav ml-auto mt-2 mt-lg-0">
<li>


    <Select placeholder="Nutrition"  style={{ width: 175, position: "relative", top:5 }} bordered={false}>
      <Option value="jack">BMI Calculator</Option>
      <Option value="lucy">Nutrition Plans</Option>
      <Option value="Yiminghe">Daily Calories calculator</Option>
    </Select>


    </li>
    </ul> */}

         <Row style={{color:"rgba(255, 255, 255, 0.5)", position: "relative", left:651, top:3}} className="Test_Dropdowns">
<div className="Test_Menu" style={{position: "relative", left: -26}}
 class="nav-item dropdown">
           <a style={{color: "white"}} href= "#" class="nav-link dropdown-toggle" data-toggle= "dropdown">Training</a>
           <div class="dropdown-menu">
             <a href="#" class="dropdown-item">Workouts</a>
             <a href="#" class="dropdown-item">Workshedules</a>
             <a href="#" class="dropdown-item">Categories</a>
             </div>
             </div>
          
             <div style={{position: "relative",left: -6}} className="Test_Menu" class="nav-item dropdown">
           <a style={{color: "white"}} href= "#" class="nav-link dropdown-toggle" data-toggle= "dropdown">Nutrition</a>
           <div class="dropdown-menu">
             <a href="#" class="dropdown-item">BMI Calculator</a>
             <a href="#" class="dropdown-item">Nutrition Plans</a>
             <a href="#" class="dropdown-item">Daily Calories calculator</a>
             </div>
             </div>
          
            

         
         </Row>
  
            {authenticated ? (
              <Menu.Item header onClick={() => this.props.logout()}>
                Logout
              </Menu.Item>
              
            ) : (
              <React.Fragment>
               <Row style={{position:"relative", left: 721, top: -12}}>
                <Link style={{position:"relative", top:11}} to="/login">
                  <Menu.Item header>Login</Menu.Item>
                </Link>
                <Link style={{position:"relative", top:11}} to="/signup">
                  <Menu.Item header>Signup</Menu.Item>
                
                </Link>
                </Row>
              
              </React.Fragment>
            )}
          </Container>
        </Menu>

        {this.props.children}
        <FooterWgner/>

        {/* <Segment className="Footer"
          inverted
          vertical
          style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
        >
          <Container textAlign="center">
            <Grid divided inverted stackable>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Group 1" />
                <List link inverted>
                  <List.Item as="a">Link One</List.Item>
                  <List.Item as="a">Link Two</List.Item>
                  <List.Item as="a">Link Three</List.Item>
                  <List.Item as="a">Link Four</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Group 2" />
                <List link inverted>
                  <List.Item as="a">Link One</List.Item>
                  <List.Item as="a">Link Two</List.Item>
                  <List.Item as="a">Link Three</List.Item>
                  <List.Item as="a">Link Four</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Group 3" />
                <List link inverted>
                  <List.Item as="a">Link One</List.Item>
                  <List.Item as="a">Link Two</List.Item>
                  <List.Item as="a">Link Three</List.Item>
                  <List.Item as="a">Link Four</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header inverted as="h4" content="Footer Header" />
                <p>
                  Extra space for a call to action inside the footer that could
                  help re-engage users.
                </p>
              </Grid.Column>
            </Grid>

            <Divider inverted section />
            <Image centered size="mini" src="/logo.png" />
            <List horizontal inverted divided link size="small">
              <List.Item as="a" href="#">
                Site Map
              </List.Item>
              <List.Item as="a" href="#">
                Contact Us
              </List.Item>
              <List.Item as="a" href="#">
                Terms and Conditions
              </List.Item>
              <List.Item as="a" href="#">
                Privacy Policy
              </List.Item>
            </List>
          </Container>
        </Segment> */}

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CustomLayout)
);
