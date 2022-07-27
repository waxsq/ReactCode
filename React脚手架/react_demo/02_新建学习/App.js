//引入核心库
import React, { Component } from "react";
//引入子组件
import Hello from "./Component/HelloComponent/Hello";
import Welcome from "./Component/WelcomeComponent/Welcome";

/**
 * 上面不是解构赋值
 * 例如React中封装了
 *
 *  export class Component{};
 *
 *  const React = {};
 *  React.Component = Component;
 *
 *  export defalut React;
 *
 * 上面分为默认导出和部分导出
 * 所以可以写React.Component 和 Component
 */

//创建组建，并暴露组件
export default class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome />
      </div>
    );
  }
}

//export default App;
