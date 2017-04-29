import React, { PropTypes, Component } from 'react';
import Assignment from '../Assignment/Assignment';
import { connect } from 'react-redux';
import styles from './DateList.css';
import moment from 'moment';
import ReactTooltip from 'react-tooltip'
import { deleteAssignment } from '../../AssignmentListActions'


/**
    Renders a single day's assignments. Variable background color based on theme.
    @param {Object} props The properies inherited from DateList
    @param {Object} context The context.
*/
class DateList extends Component {
    constructor(props){
        super(props);
        this.state = {
            showModal: false
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ showModal: false });
    }

    handleDelete (assignmentId) {
        console.log(assignmentId);
        this.props.dispatch(deleteAssignment(assignmentId));
    }

    render() {
        var date = new Date(this.props.dateObject.date);
        //var day = moment(date).format("dddd, MMMM Do");
        var dayOfWeek = moment(date).format("ddd");
        var day = moment(date).format("D");

        var backgroundStyle = {
            backgroundColor: this.props.color
        }

        return (
            <div className={styles['date-list']} style={backgroundStyle}>
                <div className={styles['day-block']}>
                    <label className={styles['dayOfWeek-label']}>{dayOfWeek}</label>
                    <label className={styles['day-label']}>{day}</label>
                </div>
                <div className={styles['assignment-list-container']}>
                {
                    this.props.dateObject.assignments.map(assignment => (
                        <div key={assignment.id}>
                            <Assignment
                                assignment={assignment}
                                handleDelete={this.handleDelete}
                            />
                        </div>
                    ))
                }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {

    };
}

DateList.propTypes = {
  dateObject: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

DateList.contextTypes = {
  router: React.PropTypes.object,
};
export default connect(mapStateToProps)(DateList);
