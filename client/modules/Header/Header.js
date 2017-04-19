import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';
import { toggleSidebar, sendLogoutRequest } from './HeaderActions';
import styles from './Header.css';
import DropdownMenu from 'react-dd-menu';

class Header extends Component {

    constructor () {
        super();
        this.logout = this.logout.bind(this);
        this.state = {isMenuOpen: false}
        this.toggle = this.toggle.bind(this);
        this.close = this.close.bind(this);
        this.click = this.click.bind(this);
    }

    toggle = () => {
        this.setState({ isMenuOpen: !this.state.isMenuOpen });
    };

    close = () => {
        this.setState({ isMenuOpen: false });
    };

    click = () => {
        console.log('You clicked an item');
    };

    logout(){
        this.props.dispatch(sendLogoutRequest())
    }

    render() {
      let view = null;
      let menuOptions = {
        isOpen: this.state.isMenuOpen,
        close: this.close.bind(this),
        toggle: <div className={styles['profile']} onClick={this.toggle.bind(this)}></div>,
      };
        return (
                <div className={styles['header']}>
                    <div className={styles['header-title']}> planr </div>
                    <input className={styles['search-field']} type="text" placeholder="Search"></input>
                    <DropdownMenu {...menuOptions}>
                        <li className={styles['logout-button']} onClick={this.logout}><a>Logout</a></li>
                    </DropdownMenu>
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
