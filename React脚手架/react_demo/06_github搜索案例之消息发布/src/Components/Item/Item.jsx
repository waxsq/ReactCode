import React, { Component } from 'react'

import './Item.css'

export default class Item extends Component {

  render() {
    const { user } = this.props;
    return (
        <div className="card">
          <a href={user.html_url} target="_blank" rel='noreferrer'>
            <img
              src={user.avatar_url}
              style={{ width: '100px' }}
            />
          </a>
          <p className="card-text">{user.login}</p>
        </div>
    )
  }
}
