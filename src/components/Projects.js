import React from "react";
import "bulma/css/bulma.css";
import '../App.css';
import { Link } from 'react-router-dom';
import ProjectOne from "./ProjectOne";


class Project extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
          <div className="container projCont">
        <div className="columns">
          <div className="column is-4">
            <div className="card" style={{background:'#EFEEED',color:"#2d2d2d"}}>
                <h1 class="card-header-title" style={{background:'#EFEEED',color:"#2d2d2d"}}>ProjectOne </h1>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>

                    <Link to="/projectOne" className="moreInfo navLinkStyles white"style={{background:'#EFEEED',color:"#2d2d2d"}}>More info</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="card is-shady" style={{background:'#EFEEED',color:"#2d2d2d"}}>
                <h1 class="card-header-title" style={{background:'#EFEEED',color:"#2d2d2d"}}>ProjectTwo</h1>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <Link to="/projectTwo" className="moreInfo navLinkStyles white" style={{background:'#EFEEED',color:"#2d2d2d"}}>More info</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="card" style={{background:'#EFEEED',color:"#2d2d2d"}}>
                <h1 class="card-header-title" style={{background:'#EFEEED',color:"#2d2d2d"}}>Project Three</h1>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <Link to="/projectThree" className="moreInfo navLinkStyles white" style={{background:'#EFEEED',color:"#2d2d2d"}}>More info</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>

      </div>
    );
  }
}

// Allow this to be imported by another JS file
export default Project;
