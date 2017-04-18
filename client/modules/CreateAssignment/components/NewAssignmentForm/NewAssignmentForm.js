import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Datetime from 'react-datetime';
import styles from './NewAssignmentForm.css';

class NewAssignmentForm extends Component {

    constructor(props){
        super(props);
        this.state = {name: '', desc: '', date: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.createAssignment(this.state);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
    }

    render() {
        return (
            <div>
                <form className={styles['new-assignment-form']} onSubmit={this.handleSubmit}>
                    <label> new assignment </label>
                    {this.props.failedLogin && <div className={styles['login-failed']}>!</div>}
                    <input name="name" className={styles['input']} type="text" placeholder="Name" value={this.state.name} onChange={this.handleChange} />
                    <input name="desc" className={styles['input']} type="text" placeholder="Description" value={this.state.data} onChange={this.handleChange} />
                    <Datetime name="date" placeholder="Due Date" value={this.state.data} onChange={this.handleChange}/>
                    <input type="submit" className={styles['assignment-submit'] + ' transition'} value="Submit" />
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

NewAssignmentForm.propTypes = {
    login: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    createAssignment: PropTypes.func.isRequired
};

NewAssignmentForm.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(NewAssignmentForm);
