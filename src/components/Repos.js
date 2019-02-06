import React from "react";
import ReactDOM from "react-dom";
import "bulma/css/bulma.css";
import RepoGrid from "./RepoGrid";
import "../App.css";

const cardStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%"
};

// Component to represent a single Hotel 'Card' (note: this is a className component so can use state)
// classNamees used below are from Bulma, see index.html above
class Repo extends React.Component {
  constructor(props) {
    super(props);
  }

  // Define what happens when this componet gets drawn on the UI
  render() {
    return (
<div>

      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="box">
              <article className="media">
                <div className="media-left" />
                <div className="media-content">
                  <div className="content">
                    {this.props.name}
                    <br />
                    <a style={{ color:'grey' }}href={this.props.url}> {this.props.url}</a> <br />
                    <p style={{ color:'#2b2b2b' }}>{this.props.description}</p>
                    <small>{this.props.timeStamp}</small>
                  </div>
                  <nav className="level is-mobile">
                    <div className="level-left">
                      <a className="level-item" aria-label="reply">
                        <span className="icon is-small">
                          <i className="fas fa-reply" aria-hidden="true" />
                        </span>
                      </a>
                      <a className="level-item" aria-label="retweet">
                        <span className="icon is-small">
                          <i className="fas fa-retweet" aria-hidden="true" />
                        </span>
                      </a>
                      <a className="level-item" aria-label="like">
                        <span className="icon is-small">
                          <i className="fas fa-heart" aria-hidden="true" />
                        </span>
                      </a>
                    </div>
                  </nav>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
</div>
    );
  }
}

// Allow this to be imported by another JS file
export default Repo;
