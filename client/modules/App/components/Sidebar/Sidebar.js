import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';
import styles from './Sidebar.css';

import { changeView } from './SidebarActions';

class Sidebar extends Component {

    constructor () {
        super();
        this.state = {}
        this.onTabChange = this.onTabChange.bind(this);

    }

    onTabChange(newTab){
        this.props.dispatch(changeView(newTab));
    }

    render() {
        return (
            <div className={styles['sidebar']}>
                <div className={styles['sidebar-tab']} onClick={() => {this.onTabChange('assignments')}}>
                    Assignments
                </div>
                <div className={styles['sidebar-tab']} onClick={() => {this.onTabChange('classes')}}>
                    Classes
                </div>
                <div className={styles['sidebar-tab']} onClick={() => {this.onTabChange('calendar')}}>
                    Calendar
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

Sidebar.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

Sidebar.contextTypes = {
    router: React.PropTypes.object,
};

export default connect(mapStateToProps)(Sidebar);
