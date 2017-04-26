/**
 * Root Component
 */
import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

// Import Routes
import routes from './routes';

// Base stylesheet
require('./main.css');
require('./lib.css');

/**
    Constructrs the root App that uses the store and router.
    @param {Object} props Inherits props object from component super class.
*/
export default function App(props) {
  return (
      <Provider store={props.store}>
          <Router history={browserHistory}>
            {routes}
          </Router>
      </Provider>
  );
}

App.propTypes = {
  store: React.PropTypes.object.isRequired,
};
