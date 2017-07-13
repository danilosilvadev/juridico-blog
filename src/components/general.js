import React, { Component } from 'react'

import Content from './content'

import './responsive.css';

const generalStyle = {
    // marginLeft: "16.66%"
    display: "flex",
    JustifyContent: "center",
    flexDirection: "row"
}

const General = () => {

    return (
        <div >
            <Content style={generalStyle} />
        </div>
    )
}

export default General