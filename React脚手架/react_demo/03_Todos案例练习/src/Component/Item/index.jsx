import React, { Component } from 'react'

export default class Item extends Component {


    state = { mouse: false };


    //单选框事件
    changeBoxValue = (id) => {
        return ( event) =>{
            const {changeChecked} = this.props;
            changeChecked(event.target.checked,id);
            //console.log(id,event.target.checked);
            
        }
    }

    //鼠标移动事件
    mouseEvent = (flag) => {
        return () => {
            this.setState({ mouse: flag });
        }

    }

    //删除事件
    removeNode = (id) =>{
        return () => {
            const {deleteTodo} = this.props;
            deleteTodo(id);
        }
    }


    

    render() {
        let { data } = this.props;
        const { mouse } = this.state;

        return (

            <div className='item-normally'>
                <li 
                    style={{ backgroundColor: mouse ? '#ddd' : 'white' }} 
                    onMouseEnter={this.mouseEvent(true)} 
                    onMouseLeave={this.mouseEvent(false)}
                    key={data.id}
                >
                    <label>
                        {/* checked只能读不能修改 */}
                        <input type="checkbox" checked={data.done} onChange={this.changeBoxValue(data.id)} />
                        {/* <span>{data.id}</span> */}
                        <span>{data.name}</span>
                        &nbsp;
                        <button 
                            onClick={this.removeNode(data.id)}
                            style={ { display: mouse? 'inline-block' : 'none'}}
                         >删除</button>
                    </label>
                </li>
            </div>
        )
    }
}
