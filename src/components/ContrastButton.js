import React from "react";

class ToggleButton extends React.Component {
  render() {
    return (
      <div className="field is-horizontal">
        <div className="field-label" />
        <div className="field-body">
          <div className="field">
            <div className="control">
              <button
                name={this.props.name}
                className="button is-rounded"
                onClick={this.props.handleClick}
              >
                {this.props.toggle ? this.props.labelOn : this.props.labelOff}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ToggleButton;
