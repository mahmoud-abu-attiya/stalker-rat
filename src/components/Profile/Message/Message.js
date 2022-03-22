import React, { Component } from "react";

export default class Message extends Component {
  shareFunction = (e) => {
    this.props.ShareFunction(e);
  };
  render() {
    return (
      <div className="message">
        <p className="message-content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
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
            <button onClick={this.shareFunction} id="shareMess">
              <i className="fas fa-share-alt-square"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
