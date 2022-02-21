import React, { Component } from "react";
import ProfileImg from "../../images/profile.jpg";
import "./Profile.scss";
import ShareImg from "../../images/share.gif";

export default class Profile extends Component {
  render() {
    const allparts = () => {
      document.querySelectorAll(".part").forEach((part) => {
        if (part.classList.contains("active")) {
          part.classList.remove("active");
        }
      });
    };
    const messAnime = () => {
      let messPart = document.querySelector(".massages");
      let parts = document.querySelector(".parts");
      allparts();
      parts.style.transform = "translate(0%)";
      messPart.classList.add("active");
    };
    const newAnime = () => {
      let newpart = document.querySelector(".massages-new");
      let parts = document.querySelector(".parts");
      allparts();
      parts.style.transform = "translate(-25%)";
      newpart.classList.add("active");
    };
    const favAnime = () => {
      let favpart = document.querySelector(".massages-fav");
      let parts = document.querySelector(".parts");
      allparts();
      parts.style.transform = "translate(-50%)";
      favpart.classList.add("active");
    };
    const sendAnime = () => {
      let sendpart = document.querySelector(".massages-send");
      let parts = document.querySelector(".parts");
      allparts();
      parts.style.transform = "translate(-75%)";
      sendpart.classList.add("active");
    };

    return (
      <div className="profile">
        <div className="cover">
          <div className="container">
            <div className="info">
              <img
                className="profile-image"
                src={ProfileImg}
                alt="profile"
              ></img>
              <h2>Mahmoud Abu-Attiya</h2>
            </div>
            <div className="share">
              <p className="link">
                https://lottiefiles.com/33940-like-comment-and-share
              </p>
              <button>
                <img src={ShareImg} alt="share link"></img>
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <ul className="row">
            <li className="col-3">
              <button onClick={messAnime}>Messages</button>
            </li>
            <li className="col-3">
              <button onClick={newAnime}>New</button>
            </li>
            <li className="col-3">
              <button onClick={favAnime}>Favorite</button>
            </li>
            <li className="col-3">
              <button onClick={sendAnime}>Send</button>
            </li>
          </ul>
          <div className="parts">
            <section className="massages part active">
              <h1>massages</h1>
              <div className="message">
                <p className="message-content">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Accusantium maxime iure tempora molestiae repellat molestias
                  in, deserunt a voluptas dolorem nostrum amet. Assumenda
                  ratione quasi dolorem? Sit animi aperiam minus!
                </p>
                <div className="mes-details">
                  <div className="mes-date">2/2/2222 2:22AM</div>
                  <div className="logo">
                    <span>S</span>talker <span>R</span>at
                  </div>
                    <div className="shr-fav">
                      <button>
                        <i className="far fa-star"></i>
                        <i class="fas fa-star"></i>
                      </button>
                      <button>
                        <i className="fas fa-share-alt-square"></i>
                      </button>
                    </div>
                </div>
              </div>
            </section>
            <section className="massages-new part">
              <h1>new</h1>
              <div className="message">
                <p className="message-content">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Accusantium maxime iure tempora molestiae repellat molestias
                  in, deserunt a voluptas dolorem nostrum amet. Assumenda
                  ratione quasi dolorem? Sit animi aperiam minus!
                </p>
                <div className="mes-date">2/2/2222 2:22AM</div>
              </div>
            </section>
            <section className="massages-fav part">
              <h1>Favorite</h1>
              <div className="message">
                <p className="message-content">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Accusantium maxime iure tempora molestiae repellat molestias
                  in, deserunt a voluptas dolorem nostrum amet. Assumenda
                  ratione quasi dolorem? Sit animi aperiam minus!
                </p>
                <div className="mes-date">2/2/2222 2:22AM</div>
              </div>
            </section>
            <section className="massages-send part">
              <h1>send</h1>
              <div className="message">
                <p className="message-content">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Accusantium maxime iure tempora molestiae repellat molestias
                  in, deserunt a voluptas dolorem nostrum amet. Assumenda
                  ratione quasi dolorem? Sit animi aperiam minus!
                </p>
                <div className="mes-date">2/2/2222 2:22AM</div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
