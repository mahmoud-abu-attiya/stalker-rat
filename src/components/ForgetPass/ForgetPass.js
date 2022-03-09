import React, { Component } from 'react'
import "./ForgetPass.scss"
import loading from "../../images/loading.gif"

export default class ForgetPass extends Component {
  render() {
    const loadingfunc = (e)=>{
      let inp = document.querySelector(".form-control")
      if(inp.value === ""){
        inp.classList.add("is-invalid")
        inp.focus()
      }else{
      inp.classList.remove("is-invalid")
      document.querySelector(".btnloading").style.display = "block";
      document.querySelector(".btnsend").classList.add("ccol")
      e.preventDefault()
    }
    }
    return (
      <div className='container'>
        <form className='send-email' onSubmit={loadingfunc}>
          <p>Do not worry, we will send you a link via email to set a new password 😊</p>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required/>
            <label htmlFor="floatingInput">Enter your Email address</label>
          </div>
          <button className='btnsend' type='subimt'>Send
            <img src={loading} alt="loading" className='btnloading'></img>
          </button>
        </form>
      </div>
    )
  }
}
