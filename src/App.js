import './styles/App.scss';
import Navbar from './components/Navbar/Navbar';
import Overlay from './components/Overlay/Overlay';
import React, { Component } from 'react'
import LandingPage from './components/LandingPage/LandingPage';
import Footer from "./components/Footer/Footer"

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Overlay />
        <Navbar />
        <LandingPage />
        <Footer />
      </div>
    )
  }
}
