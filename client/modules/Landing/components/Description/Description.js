import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import styles from './Description.css';

class Description extends Component {
  render() {
    return (
        <div className={styles['planr-signup-description']}>
            <label><span>planr</span>&nbsp; is an assignment tracker you&#39;ll actually use.</label>
            <div className={styles['sign-up-features']}>
                <label>Quickly add, edit, and collaborate on assignments.<br/></label>
                <label>Set reminders effortlessly. <br/></label>
                <label>Manage your class schedule without the hassle of fullfledged calender apps. <br/></label>
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

Description.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

Description.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(Description);
