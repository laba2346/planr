import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Datetime from 'react-datetime';
import styles from './NewClassForm.css';

class NewClassForm extends Component {
    constructor(props){
        super(props);
        this.state = {name: '', info: '', times: ''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bing(this);
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.createAssignment(this.state);
    }

    handleChange(event){
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
                <form className={styles['new-class-form']} onSubmit={this.handleSubmit}>
                    <label> New Class</label>
                    {this.props.failedLogin && <div className={styles['login-failed']}>!</div>}
                    <input name="name" className={styles['input']} type="text" placeholder="Name" value={this.state.name} onChange={this.handleChange} />
                    <input name="info" className={styles['input']} type="text" placeholder="Class Info" value={this.state.data} onChange={this.handleChange} />
                    <input type="submit" className={styles['login-submit'] + ' transition'} value="Submit" />
                </form>
                <Datetime />
            </div>
        );
    }   
}

function mapStateToProps(state) {
    return {
    };
}

NewClassForm.propTypes = {
    login: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    createAssignment: PropTypes.func.isRequired
};

NewClassForm.contextTypes = {
    router: React.PropTypes.object //might need , at end?
};

export default connect(mapStateToProps)(NewClassForm);
