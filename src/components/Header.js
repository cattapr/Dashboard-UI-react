import React from 'react';
import Clock from './Clock.js';
import logo from '../logo.svg';


function Header() {
    return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Dashboard</h1>
          <p className="clock"><Clock/></p>
        </header>
    )
}

export default Header;