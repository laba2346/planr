import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';
import styles from './ProfileDropdown.css';

class ProfileDropdown extends Component {

    constructor () {
        super();
    }

    render() {
        return (
            <div>
                <div className={styles['dropdown-button']}> Profile </div>
                <div className={styles['dropdown-button']}> Settings </div>
            </div>
        );
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
  };
}

ProfileDropdown.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

ProfileDropdown.contextTypes = {
    router: React.PropTypes.object,
};

export default connect(mapStateToProps)(ProfileDropdown);
