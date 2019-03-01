import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router, Link, Route,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import ListItem from './components/ListItem';
import CreatePage from './components/CreatePage';
import { toggleFetch, createEmail, deleteEmail, readEmail } from './slices/emailsSlice';

import './App.css';

class App extends Component {
  componentWillMount() {
    const { indicateFetch, addEmail } = this.props;
    indicateFetch();
    axios.get('https://5c5a21f9af3ff700140de477.mockapi.io/api/email')
      .then((response) => {
        response.data.forEach((message) => { addEmail(message); });
      })
      .catch((error) => {
        // TODO: Handle error
        console.log(error);
      })
      .then(() => {
        indicateFetch();
      });
  }

  render() {
    const { messages, readClick } = this.props;

    return (
      <Router>
        <header>
          <Link to="/">
            <button type="submit" className="nav-bar-item">
              List
            </button>
          </Link>
          <Link to="/create">
            <button type="submit" className="nav-bar-item">
              Create
            </button>
          </Link>
        </header>
        <Route
          exact
          path="/"
          render={() => (
            <div className="App">
              {messages.map(message => (
                <ListItem
                  key={message.id}
                  emailId={message.id}
                  senderAddress={message.from}
                  subject={message.subject}
                  handleReadClick={readClick}
                  read={message.read}
                  checked
                />
              ))}
              <div className="button-bottom">
                <button
                  className="delete"
                  type="submit"
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        />
        <Route
          path="/create"
          render={() => (
            <CreatePage />
          )}
        />
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.emails.messages,
});

const mapDispatchToProps = dispatch => ({
  indicateFetch: () => dispatch(toggleFetch),
  addEmail: email => dispatch(createEmail(email)),
  removeEmail: emailId => dispatch(deleteEmail(emailId)),
  readClick: emailId => dispatch(readEmail(emailId)),
});

App.propTypes = {
  indicateFetch: PropTypes.func.isRequired,
  addEmail: PropTypes.func.isRequired,
  removeEmail: PropTypes.func.isRequired,
  readClick: PropTypes.func.isRequired,
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
