import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import tinycolor from 'tinycolor2';

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

        var addAssignmentStyles = {
            backgroundColor: theme,
            border: '1px solid' + tinycolor(theme).darken(8).toString(),
            color: 'white',
        }

        var modalStyle = {
            overlay : {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
            },
            content : {
                width:'500px',
                height:'600px',
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                transform: 'translate(-50%, -50%)'
            }
        }

        var createAssignmentDiv = {
            background: tinycolor(theme).darken(3).toString(),
        }

        return (
            <div>
                <div style={createAssignmentDiv} className={styles['createAssignment']}>
                    <label className={styles['assignments-label']}> Assignments </label>
                </div>
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
