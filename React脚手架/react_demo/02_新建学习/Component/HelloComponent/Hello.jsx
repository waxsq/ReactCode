import React, { Component } from 'react'
// 引入css
import helloCss from './Hello.module.css'


export default class Hello extends Component {
    render() {
        return (
            <div>
                <h2 className={helloCss.showHello}>Hello World</h2>
            </div>
        )
    }
}