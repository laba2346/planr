import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';
//import NewAssignmentForm from './components/NewAssignmentForm/NewAssignmentForm';
//import styles from './Settings.css';
//import { createAssignmentRequest } from './CreateAssignmentActions';

class Settings extends Component {

    constructor () {
        super();
        this.state = {}
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        //this.createAssignment = this.createAssignment.bind(this);
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ showModal: false });
    }

    changeSetting (formdata) {
        this.props.dispatch(changeSettingRequest(formdata))
    }

    render() {
        return (
            <div>
            <form className={styles['sign-up-form']} onSubmit={this.handleSubmit}>
                <label> Sign Up </label>
                <input name="Color Theme" className={(this.props.emailInvalid ? styles['invalid-field'] : styles['valid-field']) + ' ' + styles['input']} type="text" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
                <input type="submit" className={styles['sign-up-submit'] + ' transition'} value="Submit" />
            </form>
            </div>
        );
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {

  };
}

Settings.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

Settings.contextTypes = {
    router: React.PropTypes.object,
};

export default connect(mapStateToProps)(Settings);
