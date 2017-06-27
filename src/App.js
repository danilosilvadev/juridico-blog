import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import General from './components/general'

import './components/responsive.css';

const mainStyle = {
    borderTop: "3px solid #bb0e0c",
    textAlign: "center"
  }
  //Criar styled components

class App extends Component {
  render() {
    return (
      <div className="col-12" style={mainStyle}>
        <General />
      </div>
    );
  }
}

export default App;