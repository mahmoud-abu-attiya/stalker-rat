import axios from "axios";
import React, { Component } from "react";

export default class No extends Component {
  state = {
    top_three: [],
  };
  componentDidMount() {
    axios
      .get("https://stalker-rat-test.herokuapp.com/api/top-three/")
      .then((res) => {
        this.setState({ top_three: res.data });
        // aoil()
        console.log("hi");
      })
      .catch((err) => {
        console.log(err);
      });
    }
    render() {
    // const aoil= ()=>{
    //   console.log("hi");
    //   document.querySelector(".sug-top3 .pltop").style.display = "none"
    // }
    return (
      <div className="no no-mess">
        <img src={this.props.pic} alt="No Messages"></img>
        <p>{this.props.title}</p>
        <button className="no-share" onClick={this.props.clickShare}>
          share your link with friends
          <i className="fas fa-share-alt"></i>
        </button>
        <div className="sug-top3 row">
          <div className="pltop">
            <div className="pltop__cont skeleton"></div>
            <div className="pltop__cont skeleton"></div>
            <div className="pltop__cont skeleton"></div>
          </div>
          {this.state.top_three.map((person) => {
            return(
              <a href={person.url} key={person.id} className="col-4">
              <div className="sug">
                <div className="img-cont">
                  <img src={person.image} alt={person.name}></img>
                </div>
                <p>{person.name}</p>
              </div>
            </a>
            )
          })}
        </div>
      </div>
    );
  }
}
