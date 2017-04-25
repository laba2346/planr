import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import tinycolor from 'TinyColor2';

import { fetchAssignments, createAssignmentRequest } from './AssignmentListActions';
import DateList from './Components/DateList/DateList';
import ReactModal from 'react-modal';
import NewAssignmentForm from './Components/NewAssignmentForm/NewAssignmentForm';
import styles from './AssignmentList.css';

class AssignmentList extends Component {
    componentDidMount() {
           this.props.dispatch(fetchAssignments());
    }

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

    createAssignment (formdata, state) {
        this.handleCloseModal();
        var assignments = this.props.assignments;
        this.props.dispatch(createAssignmentRequest(formdata, assignments)).then(() => {
            console.log(this.state)
        });
    }
    render() {
        var theme = this.props.themeColor;
        var dateListColors = [
            tinycolor(theme).darken(10).toString(),
            tinycolor(theme).darken(5).toString(),
            tinycolor(theme).darken(13).toString(),
            tinycolor(theme).darken(8).toString(),
        ]
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
                <div className={styles['assignments-list-container']}>
                {
                    this.props.assignments.map((dateObject, index) => (
                      <div className={styles['date-list-container']} key={dateObject.date}>
                        <DateList
                            dateObject={dateObject}
                            index={index}
                            color={dateListColors[index%(dateListColors.length)]}
                        />
                      </div>
                    ))
                }
                </div>
            </div>
        );
  }
}

AssignmentList.need = [() => { return fetchAssignments(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
    return {
        assignments: state.assignmentlist.assignments,
        themeColor: state.settings.themeColor,
    };
}

AssignmentList.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

AssignmentList.contextTypes = {
    router: React.PropTypes.object,
};

export default connect(mapStateToProps)(AssignmentList);
