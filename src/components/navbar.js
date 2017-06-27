import React, { Component } from 'react'
import Styled from 'styled-components'

import Articles from './articles'

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const sobre = () => (
    <div>
        <h2>Sobre</h2>
    </div>
)

const contato = () => (
    <div>
        <h2>Contato</h2>
    </div>
)

const UL = Styled.ul`
        list-style-type: none;
        margin-left: 39%;
        padding: 0;
        overflow: hidden;
`

const LI = Styled.li`
        padding: 5px;
        list-style-type: none;
        float: left;
`

class Navbar extends Component {
    render() {
        return (
            <Router>
                <nav>
                    <UL>
                        <LI><Link to="/">Home</Link></LI>
                        <LI><Link to="/sobre">Sobre</Link></LI>
                        <LI><Link to="/contato">Contato</Link></LI>
                    </UL>

                    <Route exact path="/" component={Articles} />
                    <Route path="/sobre" component={sobre} />
                    <Route path="/contato" component={contato} />
                </nav>
            </Router>
        )
    }
}

export default Navbar