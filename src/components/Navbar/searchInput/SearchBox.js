import axios from "axios";
import React, { Component } from "react";
import imageProfile from "../../../images/profile.svg";
import noresultpic from "../../../images/noresult.png";

export default class SearchBox extends Component {
  state = {
    person: [],
    // request: false
  };

  render() {
    // const change = () => {
      
    // };
    const search = () => {
      let plContainer = document.querySelector(".pl-container");
      let inp = document.getElementById("search");
      let tops = document.querySelector(".top3");
      let nores = document.querySelector(".noresult");
      let searchResult = document.querySelectorAll(".search-result");
      nores.style.display = "none";
      plContainer.style.display = "block";
      tops.style.display = "none";
      searchResult.forEach((result) => {
        result.style.display = "none";
      });
      this.setState({ person: [] })

      axios
        .get("https://stalker-rat-test.herokuapp.com/api/search?q=" + inp.value)
        .then((res) => {
          this.setState({ person: res.data });
          plContainer.style.display = "none";
          // console.log(this.state.person);
  
            if (this.state.person.length === 0) {
                nores.style.display = "block";
            }else{
              nores.style.display = "none"
            }
  
          if (inp.value === "") {
            tops.style.display = "";
            nores.style.display = "none";
            let searchResultT = document.querySelectorAll(
              ".top3 .search-result"
            );
            searchResultT.forEach((resultT) => {
              resultT.style.display = "";
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const inpFoucs = () => {
      let inp = document.getElementById("search");
      let sugg = document.querySelector(".suggestions");
      let overlay = document.querySelector(".overlay");
      sugg.classList.add("open-sugg");
      overlay.style.display = "block";
      inp.style.color = "";
      // if(inp.value === ""){
      //   tops.style.display = "block"
      // }else{
      // }
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
      }, 400);
      inp.style.width = "";
      inp.style.padding = "";
      navContainer.style.padding = "";
      if (window.innerWidth < 767) {
        inp.style.color = "#000";
      }
    };
    const aoil = () => {
      let userPics = document.querySelectorAll(".user-pic");
      userPics.forEach((pic) => {
        pic.classList.remove("skeleton");
      });
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
            // onChange={search}
            onInput={search}
          ></input>
          <label htmlFor="search" title="Search"></label>
        </div>
        <button id="searchIcon" autoComplete="off" onClick={openSearchBox}>
          <i className="fa fa-search"></i>
        </button>
        <div className="suggestions">
          <div className="layout"></div>
          <div className="search-list">
            <div className="pl-container">
              <div className="pl">
                <div className="pl__img skeleton"></div>
                <div className="pl__name skeleton"></div>
              </div>
              <div className="pl">
                <div className="pl__img skeleton"></div>
                <div className="pl__name skeleton"></div>
              </div>
              <div className="pl">
                <div className="pl__img skeleton"></div>
                <div className="pl__name skeleton"></div>
              </div>
              <div className="pl">
                <div className="pl__img skeleton"></div>
                <div className="pl__name skeleton"></div>
              </div>
            </div>
            <div className="top3">
              <a href="/send-message">
                <div className="search-result">
                  <div className="user-pic">
                    <img src={imageProfile} alt="user pic"></img>
                  </div>
                  <div className="user-name">Mahmoud abu attiya</div>
                </div>
              </a>
              <a href="/send-message">
                <div className="search-result">
                  <div className="user-pic">
                    <img src={imageProfile} alt="user pic"></img>
                  </div>
                  <div className="user-name">Ahmed yasser</div>
                </div>
              </a>
              <a href="/send-message">
                <div className="search-result">
                  <div className="user-pic">
                    <img src={imageProfile} alt="user pic"></img>
                  </div>
                  <div className="user-name">Salem abu attiya</div>
                </div>
              </a>
            </div>
            <div className="noresult">
              <img src={noresultpic} alt="no result"></img>
              <div>No results</div>
            </div>
            {this.state.person.map((valu) => {
              return (
                <a href="/send-message" key={valu.id}>
                  <div className="search-result">
                    <div className="user-pic skeleton">
                      <img
                        className=""
                        src={valu.image}
                        alt="user pic"
                        onLoad={aoil}
                      ></img>
                    </div>
                    <div className="user-name">{valu.name}</div>
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
