import React from "react";
import ReactDOM from "react-dom";
import "bulma/css/bulma.css";
import "../App.css";
import Nav from "./Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContrastButton from "./ContrastButton";

class Home extends React.Component {
  constructor() {
    super();
    let on= <i className="fa fa-toggle-on"></i>
    let off= <i className="fa fa-toggle-off"></i>


    this.state = {
      contrastMode: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    // handle the toggle <button>
    const name = event.target.name;
    this.setState(prevState => ({
      [name]: !prevState[name]
    }));
  }
  render() {
    return (
      <div>
        <Nav />
        <div className={this.state.contrastMode ? "light" : "dark"} >
            <div className="btnContract" style={{marginLeft:'1100px' }}>

          <ContrastButton
            name="contrastMode"
            handleClick={this.handleClick}
            toggle={this.state.contrastMode}
            labelOn="light off"
            labelOff="light on"/>
</div>


          <div className="homeText">
            <h1
              className="title cc"
              style={{ color: "white", fontWeight: "200" }}
            >
              <b className="emc" style={{ fontWeight: "800" }}>
                ELLA MCMORROW
              </b>
              <br />
              Creative Computing
              <span className="line" style={{ fontWeight: "400" }}>
                {" "}
                |
              </span>{" "}
              Portfolio Website <br />
            </h1>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

// Allow this to be imported by another JS file
export default Home;
