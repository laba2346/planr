import React, { PropTypes, Component } from 'react';
import styles from './Assignment.css';
import { connect } from 'react-redux';
import moment from 'moment';
import Datetime from 'react-datetime';


class Assignment extends Component {
    constructor(props){
        super(props);
        this.state = {
            optionsShown: false,
            editing: false,
            assignmentName: props.assignment.assignment_name,
            assignmentDate: props.assignment.assignment_due,
            createDateOpen: false,
            time: moment(props.assignment.assignment_due).format(" h:mm a"),
        };
        this.showHide = this.showHide.bind(this);
        this.delete = this.delete.bind(this);
        this.edit = this.edit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    showHide () {
        if(this.state.optionsShown){
            this.setState({ optionsShown: false })
        }
        else{
            this.setState({ optionsShown: true })
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
    }

    handleDateChange(moment){
        this.setState({
            date: moment._d,
        })
    }

    editAssignmentTime(){
        var current = this.state.createDateOpen;
        this.setState({ createDateOpen: !current });
    }

    edit () {
        if(this.state.editing){
            this.setState({ editing: false });
        }
        else {
            this.setState({ editing: true });
            this.setState({ optionsShown: false});
        }
    }

    save() {

    }

    delete(id){
        this.props.handleDelete(id);
    }

    render() {
        var date = new Date(this.props.assignment.assignment_due);
        var time = moment(date).format(" h:mm a");


        var displayOptionsDiv =
            (<div className={styles['options']}>
                <div className={styles['block'] + ' ' + styles['complete']} onClick={() => this.delete(this.props.assignment.id)}>
                    <div className={styles['checkmark'] + ' ' + styles['shown']}></div>
                </div>
                <div className={styles['block'] + ' ' + styles['edit']} onClick={() => this.edit()}>
                    <div className={styles['pencil'] + ' ' + styles['shown']}></div>
                </div>
                <div className={styles['block'] + ' ' + styles['delete']} onClick={() => this.delete(this.props.assignment.id)}>
                    <div className={styles['bin'] + ' ' + styles['shown']}></div>
                </div>
            </div>);

        var editOptionsDiv = (
            <div className={styles['options']}>
                <div className={styles['edit-block'] + ' ' + styles['complete']} onClick={() => this.save(this.props.assignment.id)}>
                    <div className={styles['checkmark'] + ' ' + styles['shown']}></div>
                </div>
                <div className={styles['edit-block'] + ' ' + styles['delete']} onClick={() => this.edit()}>
                    <div className={styles['bin'] + ' ' + styles['shown']}></div>
                </div>
            </div>
        );

        let assignmentDiv = null;
        let optionsDiv = null;

        var editingAssigment =
            (<div className={styles['editing-assignment'] + ' ' + styles['assignment'] + ' ' + styles['extend']}>
            <div className={styles['assignment-text-container']}>
                <input name="assignmentName" className={styles['edit-name']} value={this.state.assignmentName} onChange={this.handleChange}/>
                <div name="assignmentDate" className={styles['edit-date']} onClick={this.editAssignmentTime.bind(this)}>{this.state.time}</div>
            </div>
            <div className={styles['datetime-container']}>
                <Datetime name="date" className={this.state.createDateOpen ? styles['datetime-visible'] : styles['datetime-hidden']} disableOnClickOutside={true} input={false} name="date" placeholder="Due Date" value={this.state.date} onChange={this.handleDateChange.bind(this)}/>
            </div>
            {editOptionsDiv}
            </div>);

        var displayAssignment =
            <div className={this.state.optionsShown ? styles['assignment'] + ' ' + styles['extend'] : styles['assignment'] + ' ' +  styles['default']} >
                <div className={styles['assignment-text-container']} onClick={this.showHide}>
                    {this.props.assignment.assignment_name}
                    <label className={styles['time-label']}> {time} </label>
                </div>
                {this.state.optionsShown && displayOptionsDiv}
            </div>

        if (this.state.editing){
            assignmentDiv = editingAssigment;
            optionsDiv = editOptionsDiv;
        }
        else{
            assignmentDiv = displayAssignment;
            optionsDiv = displayOptionsDiv;
        }

        return (
            <div>
                {assignmentDiv}
                <div className={this.state.editing ? styles['shadow'] + ' ' + styles['shadow-open'] : styles['shadow'] + ' ' + styles['shadow-hidden']} ></div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
    };
}
Assignment.propTypes = {
    assignment: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired,
};

Assignment.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(Assignment);
