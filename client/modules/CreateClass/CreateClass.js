import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';
import NewClassForm from './components/NewClassForm/NewClassForm';
import styles from './CreateClass.css';
import { createClassRequest } from './CreateClassActions';


class CreateClass extends Component {

    constructor () {
        super();
        this.state = {}
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.createClass = this.createClass.bind(this);
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ showModal: false });
    }

    createClass (formdata) {
        this.props.dispatch(createClassRequest(formdata))
    }

    render() {
        return (
            <div>
            </div>
        );
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {

  };
}

CreateClass.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

CreateClass.contextTypes = {
    router: React.PropTypes.object,
};

export default connect(mapStateToProps)(CreateClass);
