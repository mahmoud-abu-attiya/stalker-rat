import React, { Component } from 'react'
import "./Login.scss"
import Loginimg from "../../images/login.svg"

export default class Login extends Component {
  render() {
    return (
      <div className='container'>
        <img src={Loginimg} ></img>  
      </div>
    )
  }
}
