import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import styles from './NewAssignmentForm.css';

class NewAssignmentForm extends Component {

    constructor(props){
        super(props);
        this.state = {username: '', password: '', email: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event){
        event.preventDefault();
        this.props.login(this.state);
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
                    <label> New Assignment </label>
                    {this.props.failedLogin && <div className={styles['login-failed']}>!</div>}
                    <input name="email" className={styles['input']} type="text" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
                    <input name="password" className={styles['input']} type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                    <input type="submit" className={styles['login-submit'] + ' transition'} value="Submit" />
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
};

NewAssignmentForm.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(NewAssignmentForm);
