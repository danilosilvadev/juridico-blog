import React, { Component } from 'react'
import Styled from 'styled-components'

import Articles from './articles'
import About from '../pages/about-page'
import Contact from '../pages/contact-page'
import CreateArticle from '../pages/create-article-page'


import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

/* const contato = () => (
    <div>
        <h2>Contato</h2>
    </div>
) */ //Sample about create pages without new components

const UL = Styled.ul`
        list-style-type: none;
        margin-left: 39%;
        padding: 0;
        overflow: hidden;
        text-decoration: none;

`

const LI = Styled.li`
        padding: 5px;
        list-style-type: none;
        float: left;
        font-color: #bb0e0c;
        font-family: Garamond, Georgia, serif;
        text-decoration: none;
`

const link = {
    textDecoration: "none",
    fontColor: "#bb0e0c",
    color: "#bb0e0c"
}

class Navbar extends Component {
    render() {
        return (
            <Router>
                <nav>
                    <h3><UL>
                        <LI><Link to="/" style={link}>Home</Link></LI>
                        <LI><Link to="/sobre" style={link}>Sobre</Link></LI>
                        <LI><Link to="/contato" style={link}>Contato</Link></LI>
                    </UL></h3>

                    <Route exact path="/" component={Articles} />
                    <Route path="/sobre" component={About} />
                    <Route path="/contato" component={Contact} />
                    <Route path="/create" component={CreateArticle} />
                </nav>
            </Router>
        )
    }
}

export default Navbar