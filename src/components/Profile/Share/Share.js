import React, { Component } from "react";
import {
  FacebookShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TelegramIcon,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
} from "react-share";
import "./Share.scss";

export default class Share extends Component {
  state = {
    iconSize: 60
  }
  render() {
    const shareUrl = "www.linkedin.com/in/mahmoud-abu-attiya-978496210";
    const shareTitle = "hi it`s from stalker rat"

    if (window.innerWidth < 767) {
      this.state.iconSize = 40
      // console.log(this.state.iconSize);
    }
    const hidden = (e)=>{
      let shareModern = document.querySelector(".share-modern")
      let shareContainer = document.querySelector(".share-btns-container")
      if(e.target !== shareContainer){
        shareModern.style.display = "none"
      }
    }
    return (
      <div className="share-modern" onClick={hidden} style={{display:"none"}}>
        <div className="share-btns-container">
          <h3>share you link</h3>
          <FacebookShareButton
            url={shareUrl}
            quote={shareTitle}
            hashtag={"#Stalker-Rat"}
          >
            <FacebookIcon size={this.state.iconSize} />
          </FacebookShareButton>

          <FacebookMessengerShareButton
            url={shareUrl}
            redirectUri={shareTitle}
            to={"###"}
          >
            <FacebookMessengerIcon size={this.state.iconSize} />
          </FacebookMessengerShareButton>

          <TelegramShareButton
            url={shareUrl}
            title={shareTitle}
          >
            <TelegramIcon size={this.state.iconSize} />
          </TelegramShareButton>

          <WhatsappShareButton
            url={shareUrl}
            title={shareTitle}
            separator={"###"}
          >
            <WhatsappIcon size={this.state.iconSize} />
          </WhatsappShareButton>

          <TwitterShareButton
            url={shareUrl}
            title={shareTitle}
            hashtag={"#stalker rat"}
            via={"###"}
            related={"###"}
          >
            <TwitterIcon size={this.state.iconSize} />
          </TwitterShareButton>
        </div>
      </div>
    );
  }
}
