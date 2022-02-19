import React, { Component } from 'react'
import Heart from "../../images/heart-loadign.gif"
import "./Loading.scss"

export default class Loading extends Component {
  render() {
    window.addEventListener("load", ()=>{
      document.querySelector(".heart-load").style.display = "none"
    })
    return (
      <div className='heart-load'>
        <img src={Heart} alt="loadign"></img>
      </div>
    )
  }
}
