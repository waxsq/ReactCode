import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import Proptypes from 'prop-types'


export default class Header extends Component {

    //接收的参数进行限制
    static propTypes = {
        addTodo : Proptypes.func.isRequired
    }

    onKeyUp = (event) => {
        let { keyCode, target } = event;
        if (keyCode !== 13 || target.value.trim() === '') return;

        let {addTodo} = this.props;
        const todo = {
            //这里的id采用uuid 命令：npm i nanoid
            id:nanoid(),
            name:target.value.trim(),
            done:false
        }
        //传递给父组件
        addTodo(todo);
        //清空
        target.value = '';
    }

    render() {
        return (
            <div>
                <input type="text" placeholder='请输入，回车确认' onKeyUp={this.onKeyUp} />
            </div>
        )
    }
}
