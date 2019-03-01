import React, { Component } from 'react';
import { BrowserRouter as Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import ViewPage from './ViewPage';
import './ListItem.css';

class ListItem extends Component {
  callReadClick() {
    this.props.handleReadClick(this.props.emailId);
    
    return (
      <Route 
        path="/view" 
        component={ViewDescription}
      />
    )
  }

  render() {
    return (
      <div
        className={`message ${this.props.read ? 'read' : 'unread'}`}
        onClick={() => this.callReadClick()}
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

function ViewDescription() {
  return (
    <ViewPage 
      senderAddress={this.props.senderAddress}
      subject={this.props.subject}
      text={this.props.text}
    />
  )
}

ListItem.propTypes = {
  senderAddress: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
};

export default ListItem;
