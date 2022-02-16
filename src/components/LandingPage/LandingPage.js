import React, { Component } from 'react'
import "./LandingPage.scss"
import logo from "../../images/header-logo.png"

export default class LandingPage extends Component {
  render() {
    return (
      <header>
          <div className='logo-header'>
              <img src={logo} alt="stalker rat logo"></img>
              <h1><span>S</span>talker <span>R</span>at</h1>
          </div>
          <div className='btns'>
            <div className='users-count'>
            Join 98 users and sign up
            </div>
              <a href='/'><button>sign up</button></a>
              <a href='/'><button>log in</button></a>
          </div>
      </header>
    )
  }
}
