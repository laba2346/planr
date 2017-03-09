import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';
import styles from './Header.css';

class Header extends Component {

    constructor () {
        super();
        this.state = {}
    }

    render() {
        return (
            <div>
                <div className={styles['header']}>
                    <div className={styles['logo']}>
                    </div>
                    <div className={styles['header-title']}> planr </div>
                    <div className={styles['profile']}></div>
                </div>
            </div>
        );
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {

  };
}

Header.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

Header.contextTypes = {
    router: React.PropTypes.object,
};

export default connect(mapStateToProps)(Header);
