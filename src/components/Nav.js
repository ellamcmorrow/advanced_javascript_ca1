import React,{Fragment} from "react";
import ReactDOM from "react-dom";
import "bulma/css/bulma.css";
import "../App.css";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

class Nav extends React.Component {
  state = {
    value: "ellamcmorrow@gmail.com",
    copied: false
  };


  render() {
    return (
      <div>
        <Menu>
          <Link to="/" className="navText white navTopPad">
            Home
          </Link>
          <Link to="/about" className="navText white">
            About
          </Link>
          <Link to="/projects" className="navText white">
            Projects
          </Link>
          <Link to="/repogrid" className="navText white">
            Repositories
          </Link>
          <CopyToClipboard
            text={this.state.value}
            onCopy={() => this.setState({ copied: true })}
          >
            <a>
              <i
                className="fa fa-envelope fa-xs menuIcons clippy"
                style={{ marginTop: "300px" }}
              />
              <small className="labelIcon" style={{ fontSize: "10px" }}>
                ekmcmorrow@gmail.com
              </small>
              <br />
            </a>
          </CopyToClipboard>

          {this.state.copied ? (
            <span style={{ color: "#2b2b2b" }}>
              <small style={{ fontSize: "10px" }}>
                Email copied to clipboard
              </small>
            </span>
          ) : null}
          <Fragment>
            <a href="http://www.uplabs.com/ekmcmorrow">
              <i className="fa fa-upload fa-lg menuIcons" />
            </a>
            <a href="http://www.github.com/ellamcmorrow">
              <i className="fa fa-github fa-lg menuIcons" />
            </a>
            <a href="http://www.linkedin.com/in/ella-mcmorrow-8b38bb13a/">
              <i className="fa fa-linkedin fa-lg menuIcons" />
            </a>
          </Fragment>
        </Menu>
      </div>
    );
  }
}
export default Nav;
