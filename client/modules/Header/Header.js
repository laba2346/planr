import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { addSettings, loadSettings } from './HeaderActions'
import ReactModal from 'react-modal';
import { toggleSidebar, sendLogoutRequest } from './HeaderActions';
import styles from './Header.css';
import Avatar from 'react-avatar';
import DropdownMenu from 'react-dd-menu';

class Header extends Component {

  componentDidMount() {
        this.props.dispatch(loadSettings());
    }

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
        toggle: <div className={styles['profile']} onClick={this.toggle.bind(this)} >
                <Avatar name={this.props.username} color={this.props.color} src={this.props.profile_pic} size={50} round={true} />
                </div>
      };
      const headerColor = {
          color: this.props.color
      }
        return (
                <div className={styles['header']}>
                    <div style={headerColor} className={styles['header-title']}> planr </div>
                    <div className={styles['profile-container']}>
                    <DropdownMenu {...menuOptions}>
                        <li className={styles['logout-button']} onClick={this.logout}><a>Logout</a></li>
                    </DropdownMenu>
                    </div>
                </div>
        );
  }
}

Header.need = [() => { return loadSettings(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
      color: state.settings.color,
      sidebarShown: state.header.sidebarShown,
      username: state.header.username,
      profile_pic: state.header.profile_pic
      ? String.fromCharCode.apply(null, new Uint16Array(state.header.profile_pic.data))
      : null
  };
}

Header.propTypes = {
    dispatch: PropTypes.func.isRequired,
    //username: PropTypes.string.isRequired,
    //profile_pic: PropTypes.string.isRequired
};

Header.contextTypes = {
    router: React.PropTypes.object,
};

export default connect(mapStateToProps)(Header);
