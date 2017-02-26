import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// Import Style
//import styles from './App.css';

// Import Components
import Helmet from 'react-helmet';

export class App extends Component {
  /*constructor(props) {
    super(props);
    this.state = { isMounted: false };
}*/
/*
  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
}*/

  render() {
    return (
      <div>
        <div>
          <Helmet
            title="Hello!"
            titleTemplate="Hello World"
            meta={[
              { charset: 'utf-8' },
              {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge',
              },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
            ]}
          />
        </div>
      </div>
    );
  }
}

App.propTypes = {
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
  };
}

export default connect(mapStateToProps)(App);
