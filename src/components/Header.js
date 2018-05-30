import React from 'react';
import Clock from './Clock.js';
import logo from '../logo.svg';


function Header() {
    return (
        <header className="App-header">
          <h1 className="App-title">Dashboard</h1>
          <img src={logo} className="App-logo" alt="logo" />   
          <Clock/>
        </header>
    )
}

export default Header;