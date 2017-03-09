import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import LoginPane from '../LoginPane/LoginPane';
import ReactModal from 'react-modal';
import styles from './Header.css';

class Header extends Component {

    constructor () {
        super();
        this.state = {
          showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <div>
                <div className={styles['header']}>
                    <div className={styles['logo']}>
                    </div>
                    <div className={styles['header-title']}> planr </div>
                    <div className={styles['login-button']} onClick={() => this.handleOpenModal()}>
                        Login
                    </div>
                </div>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Login"
                    className={styles['login-pane']}
                    >
                    <button className={styles['close-login-pane']} onClick={this.handleCloseModal}>X</button>
                    <LoginPane login={this.props.login} />
                </ReactModal>

            </div>
        );
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {

  };
}

Header.propTypes = {
    login: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
};

Header.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(Header);
