import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import ListItem from './components/ListItem';
import { toggleFetch, createEmail } from './slices/emailsSlice';

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
    const { messages } = this.props;

    return (
      <div className="App">
        {messages.map(message => (
          <ListItem
            key={message.id}
            senderAddress={message.from}
            subject={message.subject}
            read={message.read}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.emails.messages,
});

const mapDispatchToProps = dispatch => ({
  indicateFetch: () => dispatch(toggleFetch),
  addEmail: email => dispatch(createEmail(email)),
});

App.propTypes = {
  indicateFetch: PropTypes.func.isRequired,
  addEmail: PropTypes.func.isRequired,
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
