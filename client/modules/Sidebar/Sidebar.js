import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';
import styles from './Sidebar.css';

import { changeView } from './SidebarActions';
import { resetSettings } from '../Settings/SettingsActions'
class Sidebar extends Component {

    constructor () {
        super();
        this.state = {}
        this.onTabChange = this.onTabChange.bind(this);
    }

    onTabChange(newTab){
        this.props.dispatch(changeView(newTab));
        this.props.dispatch(resetSettings());
    }


    render() {
        var theme = this.props.themeColor;
        var activeStyle = {
            color: theme
        };
        var inactiveStyle = {
            color: '#777',
        }

        var bar = <div className={styles['sidebar'] }>
                <div className={styles['logo']}></div>
                <div style={(this.props.activeView === 'assignments') ? activeStyle : null} className={styles['sidebar-tab']} onClick={() => {this.onTabChange('assignments')}}>
                    Assignments
                </div>
                <div style={(this.props.activeView === 'classes') ? activeStyle : null} className={styles['sidebar-tab']} onClick={() => {this.onTabChange('classes')}}>
                    Classes
                </div>
                <div style={(this.props.activeView === 'calendar') ? activeStyle : null} className={styles['sidebar-tab']} onClick={() => {this.onTabChange('calendar')}}>
                    Calendar
                </div>
                <div style={(this.props.activeView === 'settings') ? activeStyle : null} className={styles['sidebar-tab']} onClick={() => {this.onTabChange('settings')}}>
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
    themeColor: state.settings.themeColor,
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
