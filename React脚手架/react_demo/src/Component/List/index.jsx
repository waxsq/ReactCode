import React, { Component } from 'react'
import Proptypes from 'prop-types'


import Item from '../Item'
export default class List extends Component {

    static propTypes = {
        todos:Proptypes.array.isRequired,
        changeChecked:Proptypes.func.isRequired
    }

    render() {
        const { todos , changeChecked , deleteTodo} = this.props;
        return (
            <div>
                <ul>
                    {
                        todos.map((item) => {
                            return <Item
                                        key={item.id}
                                        data={item}
                                        changeChecked={changeChecked}
                                        deleteTodo={deleteTodo}
                            ></Item>
                        })
                    }

                </ul>
            </div>
        )
    }
}
