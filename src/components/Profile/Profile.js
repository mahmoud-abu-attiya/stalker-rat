import React, { Component } from "react";
import ProfileImg from "../../images/profile.svg";
import "./Profile.scss";
import ShareImg from "../../images/share.gif";
// import noMess from "../../images/und4.svg";
// import noNew from "../../images/und3.svg";
// import noFav from "../../images/und1.svg";
// import noSend from "../../images/und6.svg";
import Share from "./Share/Share";
import NewMess from "./NewMess/NewMess";
import Message from "./Message/Message";
import html2canvas from "html2canvas";
// import No from "./No";

export default class Profile extends Component {
  shareScreenshot = (e) => {
    const dataURItoBlob = (dataURI) => {
      var byteString = atob(dataURI.split(",")[1]);
      var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
      var ab = new ArrayBuffer(byteString.length);
      var ia = new Uint8Array(ab);
      for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      return new Blob([ab], { type: mimeString });
    };
    let mass = e.target.parentElement.parentElement.parentElement.parentElement;
    html2canvas(mass, {
      allowTaint: true,
      useCORS: true,
    })
      .then(function (canvas) {
        let image = canvas.toDataURL("image/png", 0.5);
        image = dataURItoBlob(image);
        image = new File([image], "screenshot.png", { type: "image/png" });
        console.log("done");
        navigator.share({
          title: "screenshot",
          files: [image],
          text: "hhhhhhhhh",
        });
      })
      .catch((e) => {
        console.log(e);
      });
    // let mess = document.querySelector;
  };
  render() {
    const visibleShareBtn = () => {
      let act = document.querySelector(".parts .active");
      let shareBtn = act.querySelector(".no-share");
      if (act.classList.contains("massages-fav") || act.classList.contains("massages-send")) {
          shareBtn.style.display = "none";
        }
    };
    const visibleTopThree = () => {
      let act = document.querySelector(".parts .active");
      let topThree = act.querySelector(".sug-top3");
      if (act.classList.contains("massages-send")) {
          topThree.style.display = "flex";
        }
    }
    const allparts = () => {
      setTimeout(() => {
        visibleShareBtn()
        visibleTopThree()
      }, 100);
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
    const shareIcons = () => {
      document.querySelector(".share-modern").style.display = "";
    };
    return (
      <div className="profile">
        <Share />
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
              <button onClick={shareIcons}>
                <img src={ShareImg} alt="share link"></img>
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <ul className="row">
            <li className="col-3">
              <button onClick={messAnime}>
                Messages <span>12</span>
              </button>
            </li>
            <li className="col-3">
              <button onClick={newAnime}>
                New <span>13</span>
              </button>
            </li>
            <li className="col-3">
              <button onClick={favAnime}>
                Favorite <span>14</span>
              </button>
            </li>
            <li className="col-3">
              <button onClick={sendAnime}>
                Send <span>19</span>
              </button>
            </li>
          </ul>
          <div className="parts">
            <section className="massages part active">
              <h1>Massages</h1>
              {/* <No
                clickShare={shareIcons}
                pic={noMess}
                title="You do not have messages yet."
                topThree="notshow"
                share="show"
              /> */}
              <Message ShareFunction={this.shareScreenshot} />
            </section>
            <section className="massages-new part">
              <h1>New</h1>
              {/* <No
                clickShare={shareIcons}
                pic={noNew}
                title="You do not have new messages yet."
                topThree="notshow"
                share="show"
              /> */}
              <NewMess ShareFunction={this.shareScreenshot} />
            </section>
            <section className="massages-fav part">
              <h1>Favorite</h1>
              {/* <No
                clickShare={shareIcons}
                pic={noFav}
                title="You do not add favorite messages."
                topThree="notshow"
                share="notshow"
              /> */}
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
                      <i className="fas fa-star"></i>
                    </button>
                    <button>
                      <i className="fas fa-share-alt-square"></i>
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className="massages-send part">
              <h1>Send</h1>
              {/* <No
                clickShare={shareIcons}
                pic={noSend}
                title="You do not send any messages."
                topThree="show"
                share="notshow"
              /> */}
              <div className="message">
                <p className="message-content">
                  <span className="send-to">
                    you send this message to Ahmed :
                  </span>
                  <br />
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
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
