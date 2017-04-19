import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import styles from './Settings.css';
import { resetSuccess, changeSettingRequest, checkIfFieldsValid, changeTheme } from './SettingsActions.js'
import { CirclePicker } from 'react-color';
var Dropzone = require('react-dropzone');

class Settings extends Component {

    constructor () {
        super();
        this.state = {color: '', username: '', password1: '', password2: '', email: '', profile_pic: []};
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeColor = this.handleChangeColor.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        if(this.props.dispatch(checkIfFieldsValid(this.state))){
            this.props.dispatch(changeSettingRequest(this.state))
            this.state = {color: '', username: '', password1: '', password2: '', email: ''};
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
        if(this.props.success){
            this.props.dispatch(resetSuccess())
        }
    }

    handleChangeColor = (color) => {
        this.props.dispatch(changeTheme(color.hex));
        this.setState({ color: color.hex });
    };

    onDrop(acceptedFiles) {
      this.setState({ profile_pic: acceptedFiles });
    }

    render() {
        return (
            <div>
            <form className={styles['settings-form']} onSubmit={this.handleSubmit}>
                <label className={styles['settings-label']}> select themes color </label>
                <CirclePicker circleSpacing='10'color={this.state.color} onChangeComplete={this.handleChangeColor} />
                <input name="username" className={styles['valid-field'] + ' ' + styles['input']} type="text" placeholder="Change username" value={this.state.username} onChange={this.handleChange} />
                <input name="email" className={(this.props.emailInvalid ? styles['invalid-field'] : styles['valid-field']) + ' ' + styles['input']} type="text" placeholder="Change email" value={this.state.email} onChange={this.handleChange} />
                <input name="password1" className={(this.props.passwordInvalid ? styles['invalid-field'] : styles['valid-field']) + ' ' + styles['input']} type="password" placeholder="Change password" value={this.state.password1} onChange={this.handleChange} />
                <input name="password2" className={(this.props.passwordInvalid ? styles['invalid-field'] : styles['valid-field']) + ' ' + styles['input']} type="password" placeholder="Verify new password" value={this.state.password2} onChange={this.handleChange} />
                <Dropzone onDrop={this.onDrop} multiple='false'/>
                <input type="submit" className={styles['settings-submit'] + ' transition'} value="Save" />
                {this.props.success && <div className={styles['success']}></div>}
            </form>
            </div>
        );
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
      emailInvalid: state.settings.emailInvalid,
      passwordInvalid: state.settings.passwordInvalid,
      success: state.settings.success,
  };
}

Settings.propTypes = {
    dispatch: PropTypes.func.isRequired,
    emailInvalid: PropTypes.bool.isRequired,
    passwordInvalid: PropTypes.bool.isRequired,
    success: PropTypes.bool.success,
};

Settings.contextTypes = {
    router: React.PropTypes.object,
};

export default connect(mapStateToProps)(Settings);
