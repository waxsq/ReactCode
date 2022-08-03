import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import News from './News/News'
import Message from './Message/Message'

import MyNavLink from '../../Component/MyNavLink/MyNavLink'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="row">
        </div>
        <div className="row">
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <div>
                  <h2>Home组件内容</h2>
                  <div>
                    <ul className="nav nav-tabs">
                      <li>
                        {/* <a className="list-group-item" href="./home-news.html">News</a> */}
                        <MyNavLink className="list-group-item" to='/home/news'>News</MyNavLink>
                      </li>
                      <li>
                        {/* <a className="list-group-item active" href="./home-message.html">Message</a> */}
                        <MyNavLink className="list-group-item" to='/home/message'>Message</MyNavLink>
                      </li>
                    </ul>

                    <div>
                      {/* 注册路由,注册路由也是有先后顺序的，是 App--->home 的扫描顺序 */}
                      <Switch>
                        <Route path='/home/news' component={News} />
                        <Route path='/home/message' component={Message} />
                        <Redirect to='/home/news' />
                      </Switch>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
