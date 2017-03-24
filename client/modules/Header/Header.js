import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';
import { toggleSidebar } from './HeaderActions';
import styles from './Header.css';

class Header extends Component {

    constructor () {
        super();
        this.state = {}
        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    toggleSidebar(){
        this.props.dispatch(toggleSidebar())
    }

    render() {
        return (
                <div className={styles['header']}>
                    <div className={styles['hamburger']+' '+(this.props.sidebarShown ? styles['hamburger-float'] : styles['hamburger-relative'])} onClick={this.toggleSidebar}>
                        <div> </div>
                        <div> </div>
                        <div> </div>
                    </div>
                    <div className={styles['logo']}>
                    </div>
                    <div className={styles['header-title']}> planr </div>
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
