import React, { Component } from 'react'

import Navbar from './navbar'

const main = {
    width: "100%",
    height: "100%",
    marginTop: "0px",
    borderTop: "solid red"
}


class Content extends Component {
    render() {
        return (
            <div className="content" style={main}>
               <Navbar /> 
            </div>
        )
    }
}

export default Content