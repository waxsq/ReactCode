import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import Home from "./Component/Home/Home";
import About from "./Component/About/About";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        {/* 可以在index.js中使用 BrowserRouter 包含 App 标签，达成全局同一个路由管理*/}
        {/* 在最外层使用 BrowserRouter，方便下面Link发生变化通知Route做出反应*/}
        {/* <BrowserRouter> */}
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                {/* 原生靠a跳转页面 */}
                {/* <a className="list-group-item" href="./about.html">
                About
              </a>
              <a className="list-group-item active" href="./home.html">
                Home
              </a> */}

                {/* react中靠路由链接跳转,编写路由链接, BrowserRouter是监听路由*/}
                <Link className="list-group-item" to="/about">
                  About
                </Link>
                <Link className="list-group-item" to="/home">
                  Home
                </Link>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  {/* 注册路由 */}
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                </div>
              </div>
            </div>
          </div>
        {/* </BrowserRouter> */}
      </div>
    );
  }
}
