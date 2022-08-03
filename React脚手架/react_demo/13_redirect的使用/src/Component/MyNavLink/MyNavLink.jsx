import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class MyNavLink extends Component {

    render() {

        // const {to , title} = this.props;

        return (
            <div>
                <NavLink
                    activeClassName="active"
                    className="list-group-item"
                    // to={to}
                    //可以利用解析构造直接展开,其中标签体可以直接接展示，
                    // to,children
                    {...this.props}
                >
                    {/* {title} */}
                </NavLink>
            </div>
        );
    }
}

export default MyNavLink;
