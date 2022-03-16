import axios from "axios";
import React, { Component } from "react";
import { useParams } from "react-router-dom";
import "./SendMessage.scss";

class SendMessageCom extends Component {
  state = {
    info: []
  }
  componentDidMount(){
    const userID = this.props.usparams.id;
    console.log(userID);
    axios.get("https://stalker-rat-test.herokuapp.com/api/user/" + userID)
    .then(res => {
      // console.log(res.data);
      this.setState({ info : res.data})
    }).catch(err => {
      console.log(err);
    })
  }
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
    const aoil = () => {
      let photoBox = document.querySelector(".photo")
      photoBox.classList.remove("skeleton")
    }
    return (
      <div className="send-message container">
        <div className="photo skeleton">
          <img src={this.state.info.image} alt={this.state.info.name+" pictuer"} onLoad={aoil}></img>
        </div>
        <h1>{this.state.info.name}</h1>
        <div className="bio">{this.state.info.bio}</div>
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
export default function SendMessage(props) {
  const usparams = useParams();

  return <SendMessageCom {...props} usparams={usparams} />;
}