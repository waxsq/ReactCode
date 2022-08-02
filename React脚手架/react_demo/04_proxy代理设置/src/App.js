import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {



  getAxiosData = () => {
    /**
     * 
     * 代理模式：
     *  在package.json文件中设置字段  "proxy":"http://localhost:3000"，
     * 将客户端的4000端口发给代理，代理请求转发给服务端3000，
     * 因为代理没有ajax框架，不会产生跨域问题
     * 
     */
    axios.get('http://localhost:4000/p/posts').then(
      response => { console.log(response.data)},
      error => {console.log(error)}
    )
  }

  getCommentsData = () => {
    axios.get('http://localhost:4000/c/comments').then(
      response => { console.log(response.data)},
      error => {console.log(error)}
    )
  }


  render() {
    return (
      <div>
        <button onClick={this.getAxiosData}>点击获取数据</button>
        <button onClick={this.getCommentsData}>点击再次获取</button>
      </div>
    )
  }
}
