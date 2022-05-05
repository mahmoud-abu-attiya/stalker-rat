import React, { Component } from "react";
import logo from "../../images/und2.svg";
import mahmoudPic from "../../images/mahmoud.png";
import ahmedPic from "../../images/ahmed.jpg";
import "./About.scss";

export default class About extends Component {
  render() {
    return (
      <div className="container">
        <section className="lo-ab">
          <div className="logo-container">
            <img src={logo} alt="stalker rat"></img>
          </div>
          <div className="about">
            <div className="about__header">
              About{" "}
              <strong>
                <span>S</span>talker <span>R</span>at
              </strong>
            </div>
            <div className="about__info">
              <p>
                Stalker Rat is a React app helps you to identify your
                disadvantages and advantages by obtaining criticism from your
                friends, employees and family in complete confidentiality
                without the knowledge of the sender.
              </p>
            </div>
          </div>
        </section>
        <div className="paragrafs">
          <p>
            Stalker Rat site will not reveal the identity of the registered
            senders to users without their consent.
          </p>
          <p>
            Stalker Rat site cares a lot about the privacy of users, so no one
            can see your personal information or the messages that you have sent
            except you.
          </p>
          <p>
            We do not have an app in any app store, we are currently studying
            the development of this feature.
          </p>
        </div>
        <section className="developers-section">
          <h2>Stalker Rat Developers</h2>
          <div className="developer">
            <div className="developer__card">
              <div className="developer__card__image">
                <img src={mahmoudPic} alt="Mahmoud Abu-Attiya"></img>
              </div>
              <div className="developer__card__info">
                <div className="developer__card__info__name">
                  Mahmoud Abu-Attiya
                </div>
                <div className="developer__card__info__title">Front End</div>
                <div className="developer__card__info__links">
                  <a href="https://www.linkedin.com/in/mahmoud-abu-attiya-978496210/" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://github.com/mahmoud-abu-attiya" target="_blank" rel="noreferrer">
                    <i className="fab fa-github-square"></i>
                  </a>
                  <a href="tel:+201020384108" target="_blank" rel="noreferrer">
                    <i className="fas fa-phone"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="developer__card">
              <div className="developer__card__image">
                <img src={ahmedPic} alt="Ahmed Yasser"></img>
              </div>
              <div className="developer__card__info">
                <div className="developer__card__info__name">Ahmed Yasser</div>
                <div className="developer__card__info__title">Back End</div>
                <div className="developer__card__info__links">
                  <a href="https://www.linkedin.com/in/ahmedyasser54/" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://github.com/ahmedyasserays" target="_blank" rel="noreferrer">
                    <i className="fab fa-github-square"></i>
                  </a>
                  <a href="tel:+201091361746" target="_blank" rel="noreferrer">
                    <i className="fas fa-phone"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
