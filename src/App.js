import './styles/App.scss';
import Navbar from './components/Navbar/Navbar';
import Overlay from './components/Overlay/Overlay';
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div className="App">
      <Overlay/>
      <Navbar/>
    </div>
    )
  }
}
