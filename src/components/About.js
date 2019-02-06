import React, { Component, Fragment } from "react";
import PlayWidget from "react-spotify-widgets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CopyToClipboard } from "react-copy-to-clipboard";
class About extends Component {
  state = {
    value: "ellamcmorrow@gmail.com",
    copied: false
  };
  render() {
    return (
      <div>
        <div className="container">
          <section className="articles">
            <div className="column is-8 is-offset-2">
              <div
                className="card article"
                style={{ background: "#EFEEED", color: "black" }}
              >
                <div className="card-content">
                  <div className="media">
                    <div className="media-center" />
                    <div className="media-content has-text-centered">
                      <h1 className="title article-title">About Me</h1>
                    </div>
                  </div>
                  <div className="content article-body">
                    <p>
                      Watsup! My name is
                      <span
                        style={{
                          borderBottom: "3px solid #FD4732",
                          fontFamily: "Montserrat",
                          fontWeight: "500"
                        }}
                      >
                        {" "}
                        Ella
                      </span>
                      , I'm a final year Creative Computing student at IADT.
                    </p>
                    <p>
                      Commodo ullamcorper a lacus vestibulum sed arcu. Fermentum
                      leo vel orci porta non. Proin fermentum leo vel orci porta
                      non pulvinar. Imperdiet proin fermentum leo vel. Tortor
                      posuere ac ut consequat semper viverra. Vestibulum lectus
                      mauris ultrices eros.
                    </p>
                    <h3 className="has-text-centered">
                      Lectus vestibulum mattis ullamcorper velit sed ullamcorper
                      morbi. Cras tincidunt lobortis feugiat vivamus.
                    </h3>
                    <p>
                      In eu mi bibendum neque egestas congue quisque egestas
                      diam. Enim nec dui nunc mattis enim ut tellus. Ut morbi
                      tincidunt augue interdum velit euismod in. At in tellus
                      integer feugiat scelerisque varius morbi enim nunc. Vitae
                      suscipit tellus mauris a diam. Arcu non sodales neque
                      sodales ut etiam sit amet.
                    </p>
                    <p>
                      In eu mi bibendum neque egestas congue quisque egestas
                      diam. Enim nec dui nunc mattis enim ut tellus. Ut morbi
                      tincidunt augue interdum velit euismod in. At in tellus
                      integer feugiat scelerisque varius morbi enim nunc. Vitae
                      suscipit tellus mauris a diam. Arcu non sodales neque
                      sodales ut etiam sit amet.
                    </p>
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>

                  <section
                    class="section is-half is-right"
                    style={{
                      background: "#2b2b2b",
                      height: "450px",
                      marginLeft: "150px",
                      width: "400px",
                      color: "white"
                    }}
                  >
                    <h1 style={{ marginBottom: "20px", marginTop: "-40px;" }}>
                      <i className="fa fa-volume-up fa-lg" />{" "}
                      <b>Some music I like to listen to:</b>{" "}
                    </h1>
                    <PlayWidget
                      width={350}
                      height={300}
                      uri={
                        "spotify:user:1166819593:playlist:586GsItyDu0ymDWYWVF1IB"
                      }
                      lightTheme={true}
                      viewCoverArt={true}
                      style={{ float: "center" }}
                    />
                  </section>
                </div>
              </div>
            </div>
          </section>
          <footer
            class="footer"
            style={{ background: "#2b2b2b", color: "white" }}
          >
            <div class="content has-text-centered">
              <CopyToClipboard
                text={this.state.value}
                onCopy={() => this.setState({ copied: true })}
              >
                <a>
                  <i
                    className="fa fa-envelope fa-lg menuIcons clippy"
                    style={{ color: "white" }}
                  />
                  <small className="labelIcon" style={{ color: "white" }}>
                    {" "}
                    ekmcmorrow@gmail.com{" "}
                  </small>
                </a>
              </CopyToClipboard>

              {this.state.copied ? (
                <span style={{ color: "grey" }}>
                  <small style={{ fontSize: "14px" }}>
                    Email copied to clipboard
                  </small>
                </span>
              ) : null}
              <br />
              <br />
              <br />
<Fragment>
              <a href="http://www.uplabs.com/ekmcmorrow">
                <i
                  className="fa fa-upload fa-lg menuIcons"
                  style={{
                    color: "white",
                    display: "inline-block",
                    fontSize: "30px",
                    paddingBottom: "20px"
                  }}
                />
              </a>
              <a href="http://www.github.com/ellamcmorrow">
                <i
                  className="fa fa-github fa-lg menuIcons"
                  style={{
                    color: "white",
                    display: "inline-block",
                    fontSize: "30px"
                  }}
                />
              </a>

              <a href="http://www.linkedin.com/in/ella-mcmorrow-8b38bb13a/">
                <i
                  className="fa fa-linkedin fa-lg menuIcons"
                  style={{
                    color: "white",
                    display: "inline-block",
                    fontSize: "30px"
                  }}
                />
              </a>
</Fragment>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default About;
