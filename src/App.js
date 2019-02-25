import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import { toggleFetch, createEmail } from './slices/emailsSlice';
import logo from './logo.svg';
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
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit
            {' '}
            <code>src/App.js</code>
            {' '}
            and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  indicateFetch: () => dispatch(toggleFetch),
  addEmail: email => dispatch(createEmail({ payload: email })),
});

App.propTypes = {
  indicateFetch: PropTypes.func.isRequired,
  addEmail: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(App);
