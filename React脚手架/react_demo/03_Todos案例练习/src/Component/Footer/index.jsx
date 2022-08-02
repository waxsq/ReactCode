import React, { Component } from 'react'

export default class Footer extends Component {



  render() {
    let { length, getFinishDid, getAllOrNeitherBox, removeAllTodo } = this.props;
    return (
      <div>
        <label>
          <input type="checkbox"
            onChange={(event) => { getAllOrNeitherBox(event.target.checked) }}
            checked={getFinishDid === length && length !== 0 ? true : false}
          />
        </label>
        <span>
          <span>已完成 {getFinishDid}</span>/全部{length}
        </span>
        &nbsp;
        <button onClick={removeAllTodo}>清除已完成任务</button>
      </div>
    )
  }
}
