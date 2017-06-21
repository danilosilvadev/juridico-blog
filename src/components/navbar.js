import React, { Component } from 'react'

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'


const home = () => (
    <div>
        <h2>Home</h2>
    </div>
)

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

class Navbar extends Component {
    render() {
        return (
            <Router>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/sobre">Sobre</Link></li>
                        <li><Link to="/contato">Contato</Link></li>
                    </ul>


                    <Route exact path="/" component={home} />
                    <Route path="/sobre" component={sobre} />
                    <Route path="/contato" component={contato} />
                </nav>
            </Router>
        )
    }
}

export default Navbar