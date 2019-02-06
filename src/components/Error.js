import React from 'react';
import 'bulma/css/bulma.css'
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Error = () => {
  return (
    <div>
    <div className="columns">
    <div className="column is-4">
    <article className="message is-danger">
      <div className="message-header">
        <p>ERROR</p>
      </div>
      <div className="message-body">
        <strong>This path does not exist!</strong>
     </div>
    </article>
    </div>
    </div>
    </div>
  );
};

export default Error;
