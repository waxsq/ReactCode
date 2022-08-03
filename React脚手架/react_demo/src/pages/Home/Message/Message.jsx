import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

import Detail from './Detail/Detail'
export default class Message extends Component {

    state = {
        messageArr: [
            { id: '01', name: '1' },
            { id: '02', name: '2' },
            { id: '03', name: '3' }

        ]
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.messageArr.map(
                            (item) => {
                                return (
                                    <li key={item.id}>
                                        <Link to='/home/message/detail'>{item.name}</Link>
                                    </li>
                                )
                            }
                        )
                    }
                </ul>

                <hr />
                <Route path='/home/message/detail' component={Detail} />
            </div>
        )
    }
}
