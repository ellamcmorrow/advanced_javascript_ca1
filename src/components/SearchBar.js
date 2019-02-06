
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../App.css';

class LabelledInput extends React.Component {
  render() {
    return (

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">{this.props.label}</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control ">
              <input name={this.props.name} value={this.props.value} onChange={this.props.handleChange} style={{marginBottom:'30px'}}className="input" type="text" placeholder={this.props.placeholder} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LabelledInput;
