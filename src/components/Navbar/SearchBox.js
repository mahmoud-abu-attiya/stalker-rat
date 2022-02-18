import axios from "axios";
import React, { Component } from "react";
import imageProfile from "../../images/profile.jpg";

export default class SearchBox extends Component {
  state = {
    person: [],
  };

  render() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        this.setState({ person: res.data });
      })
      .catch((err) => {
        console.log(err);
      });

    const inpFoucs = () => {
      let inp = document.getElementById("search");
      let sugg = document.querySelector(".suggestions");
      let overlay = document.querySelector(".overlay");
      sugg.classList.add("open-sugg");
      overlay.style.display = "block";
      inp.style.color = ""
    };
    const openSearchBox = () => {
      let searchBtn = document.getElementById("searchIcon");
      let inp = document.getElementById("search");
      let logo = document.getElementById("logo");
      let btnsAndProfile = document.querySelector(".btns-pro");
      let navContainer = document.querySelector(".nav-container");
      if (inp.offsetHeight === inp.offsetWidth) {
        inp.focus();
        searchBtn.style.left = "94%";
        inpFoucs();
        logo.style.display = "none";
        btnsAndProfile.style.display = "none";
        navContainer.style.gridTemplateColumns = "100%";
        inp.style.width = "100%";
        inp.style.padding = "0px 55px 0px 20px";
        navContainer.style.padding = "0% 5%";
      }
    };
    const inpBlur = () => {
      let sugg = document.querySelector(".suggestions");
      let overlay = document.querySelector(".overlay");
      let searchBtn = document.getElementById("searchIcon");
      let inp = document.getElementById("search");
      let logo = document.getElementById("logo");
      let btnsAndProfile = document.querySelector(".btns-pro");
      let navContainer = document.querySelector(".nav-container");
      sugg.classList.remove("open-sugg");
      overlay.style.display = "none";
      searchBtn.style.left = "";
      setTimeout(() => {
        btnsAndProfile.style.display = "";
        logo.style.display = "";
        navContainer.style.gridTemplateColumns = "";
      }, 400)
      inp.style.width = "";
      inp.style.padding = "";
      navContainer.style.padding = "";
      if (window.innerWidth < 767) {
        inp.style.color = "#000"
      }
    };

    return (
      <div className="search-form">
        <div className="field">
          <input
            type="search"
            required
            autoComplete="off"
            id="search"
            onFocus={inpFoucs}
            onBlur={inpBlur}
          ></input>
          <label htmlFor="search" title="Search"></label>
        </div>
        <button id="searchIcon" autoComplete="off" onClick={openSearchBox}>
          <i className="fa fa-search"></i>
        </button>
        <div className="suggestions">
          <div className="layout"></div>
          <div className="search-list">
            {this.state.person.map((valu) => {
              return (
                <a href="/">
                  <div className="search-result">
                    <img src={imageProfile} alt="user pic"></img>
                    <div>{valu.name}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}