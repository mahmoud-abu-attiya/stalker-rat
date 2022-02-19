import React, { Component } from 'react'
import "./Login.scss"
import Loginimg from "../../images/login.svg"

export default class Login extends Component {
  render() {
    const viewPass = (e)=>{
      let inpPass = document.getElementById("floatingPassword");
      if(inpPass.type === "password"){
        inpPass.type = "text";
        e.target.classList.add("fa-eye")
        e.target.classList.remove("fa-eye-slash")
      }else{
        inpPass.type = "password"
        e.target.classList.add("fa-eye-slash")
        e.target.classList.remove("fa-eye")
      }
    }
    return (
      <div className='container log-in'>
        <img src={Loginimg} alt="login"></img>
        <form>
          <div>Welcome back 😊</div>
          <div className="form-floating">
            <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Username</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
            <i className="fa fa-eye-slash" onClick={viewPass}></i>
          </div>
          <button className='btn'>Log in</button>
        </form>
      </div>
    )
  }
}
