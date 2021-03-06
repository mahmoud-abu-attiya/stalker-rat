import React, { Component } from "react";
import "./NewMess.scss";

export default class NewMess extends Component {
  shareFunction = (e)=>{
    this.props.ShareFunction(e)
  }
  render() {
    const Open = (e) => {
      e.target.classList.add("read-ms");
    };
    return (
      <>
      <div className="message">
        <div className="plh" onClick={Open}></div>
        <div className="noti">new</div>
        <p className="message-content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Accusantium maxime iure tempora molestiae repellat molestias
          in, deserunt a voluptas dolorem nostrum amet.
        </p>
        <div className="mes-details">
          <div className="mes-date">2/2/2222 2:22AM</div>
          <div className="logo">
            <span>S</span>talker <span>R</span>at
          </div>
          <div className="shr-fav">
            <button>
              <i className="far fa-star"></i>
              <i className="fas fa-star"></i>
            </button>
            <button onClick={this.shareFunction}>
              <i className="fas fa-share-alt-square"></i>
            </button>
          </div>
        </div>
      </div>
      </>
    );
  }
}
