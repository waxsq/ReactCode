import React, { Component } from 'react'
import PubSub from 'pubsub-js'

import http from '../../Http';

export default class Search extends Component {

  //https://api.github.com/search/users?q=xxxxxx

  Search = () => {
    //单次解构赋值
    //let { value } = this.SearchNode;

    //连续解构赋值
    //let { SearchNode: { value } } = this;
    //在上式中SearchNode并没有定义

    //连续解构赋值并重命名
    // let { SearchNode: { value: searchValue } } = this;
    // console.log(searchValue);

    //单次解构赋值并重命名
    let { value: search } = this.SearchNode;

    // //更新状态
    // //this.props.updateAppState({ isFirst: false, isLoading: true });

    PubSub.publish('news', { isFirst: false, isLoading: true })
    
    http.get(`/api1/search/users?q=${search}`).then(
      response => {
        //发布消息
        PubSub.publish('news', { users: response.data.items, isLoading: false, error: '' })
        //this.props.updateAppState({ users: response.data.items, isLoading: false, error: '' });
      },
      error => {

        PubSub.publish('news', { isLoading: false, error: error.message })
        //this.props.updateAppState({ isLoading: false, error: error.message });

      }
    )

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
