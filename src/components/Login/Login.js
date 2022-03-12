import React, { Component } from 'react'
import "./Login.scss"
import Loginimg from "../../images/login.svg"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

class Loginclass extends Component {
  render() {
    const { navigation } = this.props;
    console.log(navigation);
    const viewPass = (e) => {
      let inpPass = document.getElementById("floatingPassword");
      if (inpPass.type === "password") {
        inpPass.type = "text";
        e.target.classList.add("fa-eye")
        e.target.classList.remove("fa-eye-slash")
      } else {
        inpPass.type = "password"
        e.target.classList.add("fa-eye-slash")
        e.target.classList.remove("fa-eye")
      }
    }
    const login = (e) => {
      e.preventDefault()
      let usernameinp = document.getElementById("floatingInput")
      let passwordinp = document.getElementById("floatingPassword")
      axios.post("https://stalker-rat-test.herokuapp.com/api/login/",
        {
          "username": usernameinp.value,
          "password": passwordinp.value
        }

      ).then((res) => {
        // console.log(res.data.token);
        navigation("/profile")
      }).catch((err) => {
        console.log(err);
        let errAlert = document.querySelector(".alert")
        errAlert.style.display = "flex"
        setTimeout(() => {
          errAlert.style.display = ""
        }, 7000);
      })
    }
    return (
      <div className='container log-in'>
        <img src={Loginimg} alt="login"></img>
        <form onSubmit={login}>
          <div className='title'>Welcome back 😊</div>
          <div className="form-floating">
            <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Username</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
            <i className="fa fa-eye-slash" onClick={viewPass}></i>
          </div>
          <div className="alert">
            <i className="fa-solid fa-triangle-exclamation"></i>
            <div>
            Username or password you entered isn't true, please try again or click on Forget password
            </div>
          </div>
          <button type='submit' className='btn'>Log in</button>
          <a href='/forget-password' className='a-forget'>Forget password</a>
        </form>
      </div>
    )
  }
}

export default function Login(props) {

  const navigation = useNavigate();

  return <Loginclass {...props} navigation={navigation} />
}

