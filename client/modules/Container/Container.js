import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Import Style
import styles from './Container.css';

// Import Components
import Helmet from 'react-helmet';

// Import Actions
export class Container extends Component {
    constructor(props) {
        super(props);
        this.state = { isMounted: false };
    }

    componentDidMount() {
        this.setState({isMounted: true}); // eslint-disable-line
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
                  <div className={styles.container}>
                    {this.props.children}
                  </div>
                </div>
            </div>
        );
    }
}

Container.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

/**
  Retrives data from the store as a prop
  @param {Object} The store you'll be getting props from
*/
function mapStateToProps(store) {
  return {
  };
}

export default connect(mapStateToProps)(Container);
