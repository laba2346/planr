import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import styles from './NewClassForm.css';

class NewClassForm extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', info: '', times: '',
            color: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.classnameInput.focus();
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.createClass(this.state);

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
                <form className={styles['new-class-form']} onSubmit={this.handleSubmit}>
                    <label> new class </label>
                    {this.props.failedLogin && <div className={styles['login-failed']}>!</div>}
                    <input name="name" className={styles['input']} type="text" placeholder="Class Name" value={this.state.class_name} onChange={this.handleChange}
                      ref={(input) => { this.classnameInput = input; }} />
                    <input name="desc" className={styles['input']} type="text" placeholder="Class Description" value={this.state.class_info} onChange={this.handleChange} />
                    <input name="times" className={styles['input']} type="text" placeholder="Times" value={this.state.class_times} onChange={this.handleChange} />
                    <input name="color" className={styles['input']} type="text" placeholder="Colors" value={this.state.class_color} onChange={this.handleChange} />

                    <input type="submit" className={styles['class-submit'] + ' transition'} value="Submit" />
                </form>
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
    createClass: PropTypes.func.isRequired
};

NewClassForm.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(NewClassForm);
