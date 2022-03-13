import React, { Component } from "react";
import profile from "../../images/profile.svg";
import "./SendMessage.scss";

export default class SendMessage extends Component {
  render() {
    const sendAni = () => {
      let textarea = document.getElementById("send")
      if (textarea.value !== "") {
        textarea.value = "";
        document.querySelector(".ani").classList.add("ani-done")
        setTimeout(() => {
          document.querySelector(".ani").classList.remove("ani-done")
          textarea.focus()
        }, 2400);
      } else {
        textarea.style.border = "5px solid red"
        setTimeout(() => {
        textarea.style.border = ""
        }, 2000);
      }
    };
    return (
      <div className="send-message container">
        <div className="photo">
          <img src={profile} alt="profile"></img>
        </div>
        <h1>Mahmoud Abu-Attiya</h1>
        <div className="bio">
          this is biothis is biothisthis is biothis is biothisthis is biothis is
          biothisthis is biothis is biothis is biothis is biothis is bio
        </div>
        <div>
          <div className="smc">
            <div className="ani"></div>
            <textarea id="send" type="text" autoFocus autoComplete="no">
            </textarea>
          </div>
        </div>
        <button className="send-btn" onClick={sendAni}>
          Send
        </button>
      </div>
    );
  }
}
