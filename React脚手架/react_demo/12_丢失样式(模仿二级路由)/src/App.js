import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";


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

            {/* 模仿二级路由丢失样式：解决方案在index.html和index.js中，因为二级路由中会从一级路由下开始寻找文件 */}
              {/* <MyNavLink to="/lalal/home">Home</MyNavLink> */}
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Switch>
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                  {/* <Route path="/lalal/home" component={Home} /> */}
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
