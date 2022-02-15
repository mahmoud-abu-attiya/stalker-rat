import React, { Component } from "react";
import "./Navbar.scss";
import logo from "../../images/logo.png";
import "font-awesome/css/font-awesome.min.css";
import imageProfile from "../../images/profile.jpg";
import SearchBox from "./SearchBox";

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
          <SearchBox clacc="searchBox" />
          <div className="btns-pro">
            <div className="nav-btns">
              <a href="/signin">
                <button className="sign">sign in</button>
              </a>
              <a href="/signin">
                <button className="log">log in</button>
              </a>
            </div>
            <a href="/" className="profile-part">
              <div>name</div>
              <div className="profile">
                <img src={imageProfile} alt="profile"></img>
              </div>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}