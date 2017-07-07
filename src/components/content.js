import React, { Component } from 'react'

import Navbar from './navbar'

import './responsive.css';

class Content extends Component {
    render() {
        return (
            <div className="col-8">
               <Navbar />
            </div>
        )
    }
}

export default Content