//引入核心库
import React, { Component } from "react";
import Proptypes from 'prop-types'

//引入子组件
import Header from "./Component/Header";
import List from "./Component/List";
import Footer from "./Component/Footer";

import './App.css'

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


  state = {
    todos:[
      {id:'001',name:'1',done:true},
      {id:'002',name:'2',done:true},
      {id:'003',name:'3',done:false},
    ]
  }

// 子组件传递参数给父组件，需要借助父组件的参数
  addTodo = (data) =>{
    //console.log(data)
    //获取到原来的数据
    let {todos} = this.state;
    //添加数据
    const newTodos = [ data,...todos];
    this.setState({todos:newTodos});
  }

//子组件传递给父组件:  item ---> list ---> app
changeChecked = (flag,id) =>{
  let {todos} = this.state;
  todos.forEach( item => {
    if(item.id == id){
      item.done=flag;
    }
  })
  this.setState({todos:todos})
}

//子组件传给父组件：删除操作 item ---> list ---> app
deleteTodo = (id) =>{
  let {todos} = this.state;
  const newTodos = todos.filter( obj => {
    return obj.id !== id; 
  })
  this.setState({todos:newTodos});
}

//获取数据数目:app ---> footer
getFinishDid = (data) =>{
  let length  = 0;
  data.forEach( item => {
    if(item.done){
      ++length;
    }
  })
  return length;
}

//设置全选或者全部不选:app ---> footer
getAllOrNeitherBox = ( flag) => {
  let {todos} = this.state;
  todos.forEach( item => {
    if(flag !== item.done) item.done = flag;
  })
  this.setState({todos})
}

//清除所有数据
removeAllTodo = () =>{
  let {todos} = this.state;
  const newTodos = todos.filter( item => {
    return !item.done;
  })
  this.setState({todos:newTodos});
}



  render() {
    let {todos} = this.state;
    let length = todos.length;
    return (
      <div>
        <Header addTodo={this.addTodo}/>
        <br />
        <List 
          todos={todos} 
          changeChecked={this.changeChecked}
          deleteTodo={this.deleteTodo}
        />
        <br />
        <Footer 
          length={length}
          getFinishDid={this.getFinishDid(todos)}
          getAllOrNeitherBox={this.getAllOrNeitherBox}
          removeAllTodo={this.removeAllTodo}
        />
      </div>
      
    );
  }
}

//export default App;
