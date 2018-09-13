import React from 'react';
import Inventory from '../containers/Inventory/Inventory';
import logo from '../assets/logo.svg';
import './App.css';

const App = () => (
  <div className="app">
    <header className="header">
      <img src={logo} />
    </header>
    <div className="wrapper">
      <Inventory />
    </div>
  </div>
);

export default App;
