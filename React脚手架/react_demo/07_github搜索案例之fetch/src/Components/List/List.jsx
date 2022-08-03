import React, { Component } from 'react';
import PubSub from 'pubsub-js'


import Item from '../Item/Item';

class List extends Component {


    state = {
        users: [],
        isFirst: true,
        isLoading: false,
        error: "",
    };

    //初始化
    componentDidMount() {
        //订阅消息
        //消息名，（字符串，参数）
        PubSub.subscribe('news',(msg,stateObj)=>{
            this.setState(stateObj);
        })
    }

    render() {
        const { users, error, isFirst, isLoading } = this.state;
        return (
            <div className="row">
                {
                    isFirst ? <h2>请输入...</h2> :
                        isLoading ? <h2>Loading...</h2> :
                            error ? <h2>{error}</h2> :
                                users.map(user => {
                                    return <Item user={user} key={user.id}></Item>
                                })
                }
            </div>
        );
    }
}

export default List;
