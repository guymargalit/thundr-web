import React, { Component } from 'react';
import Lifx from './Lifx';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div>
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">thundr</h1>
        </div>
        <div>
        <p>Connect to your LIFX Wi-Fi enabled LED smart lights and visualize your music with Soundcloud.</p>
        </div>
        <Lifx />
        <footer className="App-footer">
        Made by <a href="http://www.margalit.com">Guy Margalit</a>
        </footer>
      </div>
    );
  }
}

export default App;
