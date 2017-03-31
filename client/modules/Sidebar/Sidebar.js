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
        var bar = <div className={styles['sidebar'] }>
                <div className={styles['logo']}></div>
                <div className={styles['sidebar-tab'] + " " + (this.props.activeView === 'assignments' ? styles['active-sidebar-tab'] : null)} onClick={() => {this.onTabChange('assignments')}}>
                    Assignments
                </div>
                <div className={styles['sidebar-tab'] + " " + (this.props.activeView === 'classes' ? styles['active-sidebar-tab'] : null)} onClick={() => {this.onTabChange('classes')}}>
                    Classes
                </div>
                <div className={styles['sidebar-tab'] + " " + (this.props.activeView === 'calendar' ? styles['active-sidebar-tab'] : null)} onClick={() => {this.onTabChange('calendar')}}>
                    Calendar
                </div>
                <div className={styles['sidebar-tab'] + " " + (this.props.activeView === 'settings' ? styles['active-sidebar-tab'] : null)} onClick={() => {this.onTabChange('settings')}}>
                    Settings
                </div>
            </div>
       return (
           <div>
            {bar}
           </div>
       );
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    activeView: state.sidebar.activeView,
    sidebarShown: state.header.sidebarShown,
  };
}

Sidebar.propTypes = {
    sidebarShown: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
};

Sidebar.contextTypes = {
    router: React.PropTypes.object,
};

export default connect(mapStateToProps)(Sidebar);
