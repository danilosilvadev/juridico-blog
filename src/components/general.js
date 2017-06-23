import React, { Component } from 'react'

import Content from './content'

import './responsive.css';

const generalStyle = {
}

class General extends Component {
    state = {  }
    render() {
        return (
            <div style={generalStyle}>
            <Content />
            </div>
        )
    }
}

export default General