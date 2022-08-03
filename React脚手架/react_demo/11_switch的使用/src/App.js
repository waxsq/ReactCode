import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Test from "./pages/Test/Test";
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
                <Switch>
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                  {/* 
                  当path为/home的时候没虽然已经匹配到了
                  ，但是不会立刻跳转，仍然继续扫描，
                  可以使用Switch,扫描到直接跳出 ，提高效率
                */}
                  <Route path="/home" component={Test} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
