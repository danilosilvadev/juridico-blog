import React, { Component } from 'react'

import Content from './content'

import './responsive.css';

const generalStyle = {
   // marginLeft: "16.66%"
   display: "flex",
   JustifyContent: "center",
   flexDirection: "row"
}

class General extends Component {
    state = {  }
    render() {
        return (
            <div >
            <Content style={generalStyle}/>
            </div>
        )
    }
}

export default General