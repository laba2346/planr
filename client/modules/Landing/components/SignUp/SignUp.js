import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import styles from './SignUp.css';
import ReactTooltip from 'react-tooltip';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {username: '', password: '', email: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        // Throw it to Lander actions a level above
        this.props.signUp(this.state);
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
            <div className={styles['homepage-splash']}></div>
            <form className={styles['sign-up-form']} onSubmit={this.handleSubmit}>
                <label> Sign Up </label>
                <label className={styles['tooltip']} data-tip="Username and Password must at least 8 characters long">?</label>
                <ReactTooltip place="bottom" />
                <input name="email" className={(this.props.emailInvalid ? styles['invalid-field'] : styles['valid-field']) + ' ' + styles['input']} type="text" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
                <input name="username" className={(this.props.usernameInvalid ? styles['invalid-field'] : styles['valid-field']) + ' ' + styles['input']} type="text" placeholder="Username" value={this.state.username} onChange={this.handleChange} />
                <input name="password" className={(this.props.passwordInvalid ? styles['invalid-field'] : styles['valid-field']) + ' ' + styles['input']}type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                <input type="submit" className={styles['sign-up-submit'] + ' transition'} value="Submit" />
            </form>
            </div>
        );
    }
}

// Retrieve data from store as props
function mapStateToProps(state) {
    return {
        usernameInvalid: state.landing.usernameInvalid,
        emailInvalid:  state.landing.emailInvalid,
        passwordInvalid: state.landing.passwordInvalid,
    };
}

SignUp.propTypes = {
    dispatch: PropTypes.func.isRequired,
    emailInvalid: PropTypes.bool.isRequired,
    usernameInvalid: PropTypes.bool.isRequired,
    passwordInvalid: PropTypes.bool.isRequired,
    signUp: PropTypes.func.isRequired,
};

SignUp.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(SignUp);
