import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Paypal from './Paypal'
class App extends Component {

  render() {
    // sólo para los usuarios que no tengan premium
    // mantener ese valor en props o state
    return (
      <Paypal userdId="0"/>
    );
  }
}

export default App;
