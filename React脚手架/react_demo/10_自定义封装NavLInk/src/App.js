import React, { Component } from "react";
import { Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Header from "./Component/Header/Header";
import MyNavLink from "./Component/MyNavLink/MyNavLink";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* <NavLink
                activeClassName="active"
                className="list-group-item"
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                activeClassName="active"
                className="list-group-item"
                to="/home"
              >
                Home
              </NavLink> */}

              {/* 
                由于标签体也可以自动写入props中，
                并且在props-->child--->标签体 ，
                所以可以直接写在标签中,可以通过props.children获取标签体的内容
              */}
              <MyNavLink to='/about'>About</MyNavLink>
              <MyNavLink to='/home'>Home</MyNavLink>
              {/* <MyNavLink to='/home' title='Home'/> */}

            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Route path="/about" component={About} />
                <Route path="/home" component={Home} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
