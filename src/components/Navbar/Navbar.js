import React, { Component } from "react";
import "./Navbar.scss";
import logo from "../../images/logo.png";
import "font-awesome/css/font-awesome.min.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="container">
          <a href="/">
            <div className="logo">
              <img src={logo} alt="stalker-rat logo"></img>
              <h2>
                <span>S</span>talker <span>R</span>at
              </h2>
            </div>
          </a>
          <div className="search-form">
            <div className="field">
              <input type="search" required autoComplete="off" id="search"></input>
              <label htmlFor="search" title="Search"></label>
            </div>
            <button id="submit" autoComplete="off" onClick={this.expand_search}>
              <i className="fa fa-search"></i>
            </button>
          </div>
          <div className="nav-btns">
            <a href="/signin">
              <button className="sign">sign in</button>
            </a>
            <a href="/signin">
              <button className="log">log in</button>
            </a>
          </div>
          <div className="profile">
            <img src="/" alt="profile"></img>
          </div>
        </div>
      </nav>
    );
  }
}
