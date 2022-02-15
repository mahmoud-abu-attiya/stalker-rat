import React from 'react'
import imageProfile from "../../images/profile.jpg";
import jsonData from "../../Data.json"



export default function SearchBox(clacc, data) {
  return (
    <div className="search-form" >
      <div className="field">
        <input type="search" required autoComplete="off" id="search"></input>
        <label htmlFor="search" title="Search"></label>
      </div>
      <button id="submit" autoComplete="off">
        <i className="fa fa-search"></i>
      </button>
      <div className="suggestions">
        <div className="layout"></div>
        <div className="search-list">

          {jsonData.map((valu, key) => {

            return <a href="/" key={clacc}><div className="search-result">
              <img src={imageProfile} alt="user pic"></img>
              <div>{valu.name}</div>
            </div></a>

          })}

        </div>
      </div>
    </div>
  )
}
