import React, { PropTypes, Component } from 'react';
import styles from './Assignment.css';
import { connect } from 'react-redux';
import moment from 'moment';


class Assignment extends Component {
    constructor(props){
        super(props);
        this.state = {
            optionsShown: false,
            editing: false,
            assignmentName: props.assignment.assignment_name,
            assignmentDate: props.assignment.assignment_due,
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
        console.log(value);
        const name = target.name;
        this.setState({
          [name]: value
        });
    }

    edit () {
        if(this.state.editing){
            this.setState({ editing: false });
        }
        else {
            console.log("editing!");
            this.setState({ editing: true });
            this.setState({ optionsShown: false});
        }
    }

    delete(id){
        this.props.handleDelete(id);
    }

    render() {
        var date = new Date(this.props.assignment.assignment_due);
        var time = moment(date).format(" h:mm a");
        return (
            <div>
                <div className={this.state.optionsShown ? styles['assignment'] + ' ' + styles['extend'] : styles['assignment'] + ' ' +  styles['default']} >
                    <div className={!this.state.editing ? styles['assignment-text-container'] + ' ' + styles['shown'] : styles['edit-hidden']} onClick={this.showHide}>
                        {this.props.assignment.assignment_name}
                        <label className={styles['time-label']}> {time} </label>
                    </div>
                    <div className={this.state.editing ? styles['assignment-text-container'] : styles['edit-hidden']}>
                        <input name="assignmentName" className={styles['edit-name']} value={this.state.assignmentName} onChange={this.handleChange}/>
                        <input name="assignmentDate" className={styles['edit-date']} value={time} onChange={this.handleChange}/>
                    </div>

                    <div className={this.state.optionsShown ? styles['options'] + ' ' + styles['shown']  : styles['options'] + ' ' + styles['hidden']}>
                        <div className={this.state.optionsShown ? styles['block'] + ' ' + styles['shown'] + ' ' + styles['complete']  : styles['complete'] + ' ' + styles['hidden']} onClick={() => this.delete(this.props.assignment.id)}>
                            <div className={this.state.optionsShown ? styles['checkmark'] + ' ' + styles['shown'] : styles['pencil'] + ' ' + styles['hidden']}>
                            </div>
                        </div>
                        <div className={ this.state.optionsShown ? styles['block'] + ' ' + styles['shown'] + ' ' + styles['edit']  : styles['edit'] + ' ' + styles['hidden']} onClick={() => this.edit()}>
                            <div className={this.state.optionsShown ? styles['pencil'] + ' ' + styles['shown'] : styles['pencil'] + ' ' + styles['hidden']}>
                            </div>
                        </div>
                        <div className={this.state.optionsShown ? styles['block'] + ' ' + styles['shown'] + ' ' + styles['delete']  : styles['delete'] + ' ' + styles['hidden']} onClick={() => this.delete(this.props.assignment.id)}>
                            <div className={this.state.optionsShown ? styles['bin'] + ' ' + styles['shown'] : styles['bin'] + ' ' + styles['hidden']}>
                            </div>
                        </div>
                    </div>
                </div>

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
