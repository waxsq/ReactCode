import React, { Component } from "react";

import Search from "./Components/Search/Search";
import List from "./Components/List/List";

export default class App extends Component {
  state = { 
    users: [],
    isFirst:true,
    isLoading:false,
    error:'' 
  };

  //搜索组件传递数据
  updateAppState = (stateObj) => {
    this.setState(stateObj);
  };


  render() {
    return (
      <div>
        <div className="container">
          <Search updateAppState={this.updateAppState}/>
          <List { ...this.state}/>
        </div>
      </div>
    );
  }
}
