import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import tinycolor from 'tinycolor2';

import { fetchAssignments, createAssignmentRequest } from './AssignmentListActions';
import DateList from './Components/DateList/DateList';
import ReactModal from 'react-modal';
import styles from './AssignmentList.css';
import Datetime from 'react-datetime';

class AssignmentList extends Component {
    componentDidMount() {
           this.props.dispatch(fetchAssignments());
    }

    constructor () {
        super();
        this.state = { createAssignmentActive: false, createDateOpen: false, date: '', name: ''};
    }

    createAssignment() {
        var formdata = {
            name: this.state.name,
            date: this.state.date,
        }
        this.setState({ createAssignmentActive: false });
        this.setState({ createDateOpen: false });
        this.setState({ date: ''});
        this.props.dispatch(createAssignmentRequest(formdata));
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        console.log(value);
        const name = target.name;
        this.setState({
          [name]: value
        });
    }

    handleDateChange(moment){
        console.log(moment._d);
        this.setState({
            date: moment._d,
        })
    }

    validDate(current){
        var yesterday = Datetime.moment().subtract( 1, 'day' );
        return current.isAfter( yesterday );
    }

    handleNewAssignmentClick(e){
        this.setState({ createAssignmentActive: true });
        if (e.stopPropagation) {
            e.stopPropagation();   // W3C model
        }
        else {
            e.cancelBubble = true; // IE model
        }
    }

    turnShadowOff(){
        this.setState({ createAssignmentActive: false });
        this.setState({ createDateOpen: false });
    }

    newAssignmentTime(){
        var current = this.state.createDateOpen;
        this.setState({ createDateOpen: !current });
    }

    render() {
        var theme = this.props.color;
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

        var createAssignmentDiv = {
            background: tinycolor(theme).darken(3).toString(),
        }

        var assignmentsExist = (this.props.assignments.length > 0);
        var assignmentsDontExist = (this.props.assignments.length == 0);
        var noAssignments = <div className={styles['no-assignments']}><label>No assignments yet!<br/> Create one above to get started.</label></div>

        return (
            <div onClick={this.turnShadowOff.bind(this)}>
                <div style={createAssignmentDiv} className={styles['createAssignment']}>
                    <label className={styles['assignments-label']}> Assignments </label>
                    <div className={styles['new-assignment-container']} onClick={this.handleNewAssignmentClick.bind(this)} >
                        <input name="name" className={styles['new-assignment']} placeholder="New Assignment" type="text" onChange={this.handleChange.bind(this)} />
                        <div className={styles['calendar']} onClick={this.newAssignmentTime.bind(this)}></div>
                        <div className={styles['datetime-container']}>
                            <Datetime isValidDate={this.validDate.bind(this)} name="date" className={this.state.createDateOpen ? styles['datetime-visible'] : styles['datetime-hidden']} disableOnClickOutside={true} input={false} name="date" placeholder="Due Date" value={this.state.date} onChange={this.handleDateChange.bind(this)}/>
                        </div>
                        <div onClick={this.createAssignment.bind(this)} className={this.state.createAssignmentActive ? styles['create'] + ' ' + styles['create-active'] : styles['create'] + ' ' + styles['create-inactive'] }> Create </div>
                    </div>
                </div>

                    {assignmentsExist && this.props.assignments.map((dateObject, index) => (
                            <div className={styles['date-list-container']} key={dateObject.date}>
                                <DateList
                                dateObject={dateObject}
                                index={index}
                                color={dateListColors[index%(dateListColors.length)]}
                                />
                            </div>
                        ))}
                    {assignmentsDontExist && noAssignments}
                <div className={this.state.createAssignmentActive ? styles['shadow'] + ' ' + styles['shadow-open'] : styles['shadow'] + ' ' + styles['shadow-hidden']} ></div>
            </div>
        );
  }
}

AssignmentList.need = [() => { return fetchAssignments(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
    return {
        assignments: state.assignmentlist.assignments,
        color: state.settings.color,
    };
}

AssignmentList.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

AssignmentList.contextTypes = {
    router: React.PropTypes.object,
};

export default connect(mapStateToProps)(AssignmentList);
