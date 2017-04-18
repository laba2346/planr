import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';
import NewAssignmentForm from './components/NewAssignmentForm/NewAssignmentForm';
import styles from './CreateAssignment.css';
import { createAssignmentRequest } from './CreateAssignmentActions';

class CreateAssignment extends Component {

    constructor () {
        super();
        this.state = {}
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.createAssignment = this.createAssignment.bind(this);
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ showModal: false });
    }

    createAssignment (formdata) {
        console.log(formdata)
        this.props.dispatch(createAssignmentRequest(formdata));
    }

    render() {
        return (
            <div>
            <div className={styles['add-assignment-button']} onClick={() => this.handleOpenModal()}> + </div>
                <ReactModal
                   isOpen={this.state.showModal}
                   contentLabel="Create Assignment"
                   className={styles['create-assignment-pane']}
                   >
                   <button className={styles['close-assignment-pane']} onClick={this.handleCloseModal}>X</button>
                   <NewAssignmentForm createAssignment={this.createAssignment}/>
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

CreateAssignment.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

CreateAssignment.contextTypes = {
    router: React.PropTypes.object,
};

export default connect(mapStateToProps)(CreateAssignment);
