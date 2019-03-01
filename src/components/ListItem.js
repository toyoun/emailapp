import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ListItem.css';

class ListItem extends Component {
  render() {
    return (
      <div
        className={`message ${this.props.read ? 'read' : 'unread'}`}
        onClick={() => this.props.handleReadClick(this.props.emailId)}
      >
        <input
          className="checkbox"
          type="checkbox"
        />
        <p className="sender">{this.props.senderAddress}</p>
        <p className="subject">{this.props.subject}</p>
      </div>
    )
  }
};

ListItem.propTypes = {
  senderAddress: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
};

export default ListItem;
