import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';
import { toggleSidebar, sendLogoutRequest } from './HeaderActions';
import styles from './Header.css';

class Header extends Component {

    constructor () {
        super();
        this.state = {}
        this.toggleSidebar = this.toggleSidebar.bind(this);
        this.logout = this.logout.bind(this);
    }

    toggleSidebar(){
        this.props.dispatch(toggleSidebar())
    }

    logout(){
        this.props.dispatch(sendLogoutRequest())
    }

    render() {
        return (
                <div className={styles['header']}>
                    <div className={styles['header-title']}> planr </div>
                    <button onClick={this.logout}>Logout</button>
                    <input className={styles['search-field']} type="text" placeholder="Search"></input>
                    <div className={styles['profile']}></div>
                </div>
        );
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
      sidebarShown: state.header.sidebarShown
  };
}

Header.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

Header.contextTypes = {
    router: React.PropTypes.object,
};

export default connect(mapStateToProps)(Header);
