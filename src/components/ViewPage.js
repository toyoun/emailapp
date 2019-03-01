import React from 'react';
import PropTypes from 'prop-types';

const ViewPage = (props) => (
  <div>
    <form>
      <div>
        <label htmlFor="to" className="create-section">
          To: {this.props.senderAddress}
        </label>
      </div>
      <div>
        <label htmlFor="subject" className="create-section">
          Subject: {this.props.subject}
        </label>
      </div>
      <div className="create-section">
        <p id="newMsg" className="textbox">{this.props.text}</p>
      </div>
    </form>
    <div className="button-bottom">
      <button className="prev" type="submit">Prev</button>
      <button className="next" type="submit">Next</button>
    </div>
  </div>
);

ViewPage.propTypes = {
  senderAddress: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
} 

export default ViewPage;