import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import styles from './Classes.css';
import ReactModal from 'react-modal';
import CreateClass from '../CreateClass/CreateClass';
import ClassList from '../ClassList/ClassList'
import NewClassForm from '../CreateClass/components/NewClassForm/NewClassForm';
import { createClassRequest } from './ClassesActions';

class Classes extends Component {

    constructor () {
        super();
        this.state = {}
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        //this.viewClass = this.viewClass.bind(this);
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ showModal: false});
    }

    render() {
        return (
            <div className={styles['classes-container']}>
            <CreateClass />
            </div>
        );
  }
}

function mapStateToProps(state)
{
    return {
    };
}

// Retrieve data from store as props
Classes.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

Classes.contextTypes = {
    router: React.PropTypes.object,
};

export default connect(mapStateToProps)(Classes);
