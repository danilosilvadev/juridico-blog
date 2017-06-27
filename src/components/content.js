import React, { Component } from 'react'

import Navbar from './navbar'

import './responsive.css';

const contentStyles = {
  
}

class Content extends Component {
    render() {
        return (
            <div className="col-8" style={contentStyles}>
               <Navbar />
            </div>
        )
    }
}

export default Content