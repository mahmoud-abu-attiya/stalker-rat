import React, { Component } from "react";
import "./EditProfile.scss";
import ProfileImg from "../../images/profile.jpg";
// import { Widget } from "@uploadcare/react-widget";
// import UPLOADCARE_PUBLIC_KEY from "@uploadcare/react-widget"

export default class EditProfile extends Component {
  render() {
    ////////////////////////////////////////////////////
    // Getting an instance of the widget.
    // const widget = uploadcare.Widget('[role=uploadcare-uploader]');
    // // Selecting an image to be replaced with the uploaded one.
    // const preview = document.getElementById('photo');
    // // "onUploadComplete" lets you get file info once it has been uploaded.
    // // "cdnUrl" holds a URL of the uploaded file: to replace a preview with.
    // let info;

    // widget.onUploadComplete(fileInfo => {
    //   info = fileInfo;
    //   document.getElementById("id_hidden_image").value = fileInfo.cdnUrl
    //   preview.src = fileInfo.cdnUrl;
    // });

    // let icon = document.querySelector(".edit-icon");
    // let btn = document.querySelector(".uploadcare--widget__button_type_open");
    // btn.style.display = 'hidden';
    // icon.addEventListener("click", () => {
    //   btn.click();
    // })
    // const editIMG = () => {
    //   console.log(
    //     document.querySelector(
    //       ".uploadcare--widget__button uploadcare--widget__button_type_open"
    //     )
    //   );
    // };
    ////////////////////////////////////////////////////
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
              id="photo"
                className="profile-image"
                src={ProfileImg}
                alt="profile"
              ></img>
              <div className="edit-photo">
                {/* <Widget publicKey="YOUR_PUBLIC_KEY" />; */}
                <div className="crop-img">
                  <input
                    type="hidden"
                    role="uploadcare-uploader"
                    data-crop="1:1"
                    data-images-only
                  />
                </div>
                <i className="fa-solid fa-pen-to-square"></i>
              </div>
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

          <a href="/">
            log out <i className="fa-solid fa-arrow-right-from-bracket"></i>
          </a>
          {/* crop image */}
          {/* <div className="crop-img">
            <script>
              {UPLOADCARE_PUBLIC_KEY = "demopublickey"}
            </script>
            <script src="https://ucarecdn.com/libs/widget/3.x/uploadcare.full.min.js" charset="utf-8"></script>
            <input type="hidden" role="uploadcare-uploader" data-crop="1:1" data-images-only />
          </div> */}
          {/* crop image */}
        </div>
      </div>
    );
  }
}
