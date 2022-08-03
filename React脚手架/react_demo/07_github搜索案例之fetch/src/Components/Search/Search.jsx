import React, { Component } from 'react'
import PubSub from 'pubsub-js'

import http from '../../Http';

export default class Search extends Component {

  //https://api.github.com/search/users?q=xxxxxx

  Search = async () => {

    //单次解构赋值并重命名
    let { value: search } = this.SearchNode;



    PubSub.publish('news', { isFirst: false, isLoading: true })


    //#region
    // http.get(`/api1/search/users?q=${search}`).then(
    //   response => {
    //     //发布消息
    //     PubSub.publish('news', { users: response.data.items, isLoading: false, error: '' })
    //     //this.props.updateAppState({ users: response.data.items, isLoading: false, error: '' });
    //   },
    //   error => {

    //     PubSub.publish('news', { isLoading: false, error: error.message })
    //     //this.props.updateAppState({ isLoading: false, error: error.message });

    //   }
    // )
    //#endregion


    //发送网络请求 ---- fetch

    // fetch(`/api1/search/users2?q=${search}`).then(
    //   response => {
    //     console.log('联系上服务器');
    //     return response.json();
    //   },
    //   // error => {
    //   //   console.log('联系失败');
    //   //   return Promise.reject();
    //   // }
    // ).then(
    //   response => {
    //     console.log('成功获取到', response);
    //   },

    // ).catch(
    //   error => console.log(error)
    // )

// 优化代码
    try {
      const result = await fetch(`/api1/search/users?q=${search}`);
      const data = await result.json();
      PubSub.publish('news', { users: data.items, isLoading: false, error: '' })
    } catch (error) {
      PubSub.publish('news', { isLoading: false, error: error.message , users:[]})
    }
  }
  


  render() {
    return (
      <div>
        <section className="jumbotron">
          <h3 className="jumbotron-heading">搜索 Github 用户</h3>
          <div>
            <input type="text" placeholder="输入关键字点击搜索" ref={c => this.SearchNode = c} />
            &nbsp;<button onClick={this.Search}>Search</button>
          </div>
        </section>
      </div>
    )
  }
}
