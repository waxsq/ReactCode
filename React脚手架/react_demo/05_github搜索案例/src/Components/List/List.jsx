import React, { Component } from 'react';
import Item from '../Item/Item';

class List extends Component {
    render() {

        const { users, error, isFirst, isLoading } = this.props;
        return (
            <div className="row">
                {
                    isFirst == true ? <h2>请输入...</h2> :
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
