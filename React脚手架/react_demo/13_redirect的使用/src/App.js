import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

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
              <MyNavLink to="/about">About</MyNavLink>
              <MyNavLink to="/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Switch>
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                  {/* 重定向，默认指向(如果都匹配不上) */}
                  <Redirect to='/home'></Redirect>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
