import './styles/App.scss';
import Navbar from './components/Navbar/Navbar';
import Overlay from './components/Overlay/Overlay';
import React, { Component } from 'react'
import LandingPage from './components/LandingPage/LandingPage';
import Footer from "./components/Footer/Footer";
import Login from './components/Login/Login';
import SignUp from './components/Signup/Signup';
import { BrowserRouter as Router, Swich, Route, Routes } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Overlay />
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    )
  }
}
