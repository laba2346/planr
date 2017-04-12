import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';
import { toggleSidebar, sendLogoutRequest } from './HeaderActions';
import styles from './Header.css';
import DropdownMenu from 'react-dd-menu';

class Header extends Component {

    constructor () {
        super();
        this.toggleSidebar = this.toggleSidebar.bind(this);
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
        align: 'right',
      };
        return (
                <div className={styles['header']}>
                    <div className={styles['header-title']}> planr </div>
                    <button onClick={this.logout}>Logout</button>
                    <input className={styles['search-field']} type="text" placeholder="Search"></input>
                    <DropdownMenu {...menuOptions}>
                      <li><a href="#">Example 1</a></li>
                      <li><div className={styles['profile']} type="button" onClick={this.click.bind(this)}>Example 2</div></li>
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
