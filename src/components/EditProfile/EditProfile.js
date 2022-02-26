import React, { Component } from "react";
import "./EditProfile.scss";
import ProfileImg from "../../images/profile.jpg";

export default class EditProfile extends Component {
  render() {
    const subAni = () => {
      let loader = document.querySelector(".loader"),
        check = document.querySelector(".check");
      loader.classList.add("active");
      loader.addEventListener("animationend", function () {
        check.classList.add("active");
      });
    };
    return (
      <div className="edit-profile">
        <div className="cover">
          <div className="container">
            <div className="info">
              <img
                className="profile-image"
                src={ProfileImg}
                alt="profile"
              ></img><div className="edit-photo"><i className="fa-solid fa-pen-to-square"></i></div>
              <h2>Mahmoud Abu-Attiya</h2>
            </div>
            <div className="share">
              <p className="link">
                https://lottiefiles.com/33940-like-comment-and-share
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="form-floating mb-3 col-6">
              <input
                type="text"
                className="form-control"
                placeholder="Mohamed"
              />
              <label htmlFor="floatingInput">First Name</label>
            </div>
            <div className="form-floating mb-3 col-6">
              <input type="text" className="form-control" placeholder="Ail" />
              <label htmlFor="floatingInput">Last Name</label>
            </div>
            <div className="form-floating mb-3">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
              />
              <label htmlFor="floatingTextarea2">Bio</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="mohamed-ali"
              />
              <label htmlFor="floatingInput">User Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
              <label htmlFor="floatingInput">Password</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
          </div>

          <div className="main">
            <button className="button" onClick={subAni}>
              Submit
            </button>
            <div className="loader">
              <div className="check">
                <span className="check-one" />
                <span className="check-two" />
              </div>
            </div>
          </div>

          <a href="/">log out <i className="fa-solid fa-arrow-right-from-bracket"></i></a>
        </div>
      </div>
    );
  }
}
