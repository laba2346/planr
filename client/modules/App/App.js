import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {sendLoginRequest} from './AppActions';

// Import Style
import styles from './App.css';

// Import Components
import Helmet from 'react-helmet';
import Header from './components/Header/Header';

// Import Actions
export class App extends Component {
    constructor(props) {
        super(props);
        this.state = { isMounted: false };
        this.login = this.login.bind(this);
    }

    componentDidMount() {
        this.setState({isMounted: true}); // eslint-disable-line
    }

    login(formState){
        this.props.dispatch(sendLoginRequest(formState));
    }

    render() {
        return (
            <div>
                <div>
                  <Helmet
                    title="Planr"
                    titleTemplate="%s - Planr"
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
                  <Header login={this.login} />
                  <div className={styles.container}>
                    {this.props.children}
                  </div>
                </div>
            </div>
        );
    }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
  };
}

export default connect(mapStateToProps)(App);
