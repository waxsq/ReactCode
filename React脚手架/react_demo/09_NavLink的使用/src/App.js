import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";

// pages下的是路由组件
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
// component下的是一般组件
import Header from "./Component/Header/Header";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
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
                <NavLink activeClassName="active" className="list-group-item" to="/about">
                  About
                </NavLink>
                <NavLink activeClassName="active" className="list-group-item" to="/home">
                  Home
                </NavLink>
                {/* 
                  Link和NavLink功能相似
                  NavLink中有当点击激活会添加 activeClassName="active",这个是默认确定的，
                  active是可以为自定义的样式
                */}
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
