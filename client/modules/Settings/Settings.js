import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import styles from './Settings.css';
import { resetSuccess, changeSettingRequest, checkIfFieldsValid, changeProfilePicRequest, checkIfProfilePicValid, changeTheme } from './SettingsActions.js'
import { GithubPicker } from 'react-color';
import { addSettings, loadSettings } from '../Header/HeaderActions';
import ReactTooltip from 'react-tooltip';
import Avatar from 'react-avatar';

var Dropzone = require('react-dropzone');

class Settings extends Component {

    constructor () {
        super();
        this.state = {color: '', username: '', password1: '', password2: '', email: '', profile_pic: null};
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeColor = this.handleChangeColor.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onDrop = this.onDrop.bind(this);
        //this.props.dispatch(loadSettings());
    }

    componentDidMount() {
        this.props.dispatch(loadSettings());
        this.usernameInput.focus();
        this.setState({ color: this.props.color });
    }

    handleSubmit(event){
        console.log(this.state);
        event.preventDefault();
        if(this.props.dispatch(checkIfFieldsValid(this.state))){
            this.props.dispatch(changeSettingRequest(this.state))
            console.log("REEEEEEEEEEEEE")
            this.state.color = '';
            this.state.username = '';
            this.state.password1 = '';
            this.state.password2 = '';
            this.state.email = '';
        }
        if(this.props.dispatch(checkIfProfilePicValid(this.state))){
            this.props.dispatch(changeProfilePicRequest(this.state))
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

    onDrop(acceptedFile) {
      console.log(acceptedFile[0]);
      this.setState({ profile_pic: acceptedFile[0] });
    }

    render() {
        // style the dropzone component dynamically so the background image can change
        var preview = this.state.profile_pic ? this.state.profile_pic.preview : '';
        var dropzoneStyle = {
            backgroundImage: preview ? 'url(' + preview + ')' : '',
            border: '2px dashed',
            height: '180px',
            maxHeight: '180px',
            width: '180px'
        };
        var settingsContainerStyle = {
            background: this.state.color,
        }

        var colorOptions = ['#705e8b', '#607D8B', '#476846', '#D06E70', '#697689', '#5F6A9B'];

        return (
        <div style={settingsContainerStyle} className={styles['settings-container']}>
            <div className={styles['settings']}>
                <div className={styles['item-container']}>
                    <div className={styles['settings-label']}>Settings</div>
                </div>
                <form className={styles['settings-form']} onSubmit={this.handleSubmit}>
                    <div className={styles['item-container']}>
                        <label className={styles['item-label'] + ' ' + styles['color-label']}> Theme Color </label>
                        <div className={styles['color-container']}>
                            <GithubPicker width={'165px'} colors={colorOptions} triangle={'hide'} color={this.state.color} onChangeComplete={this.handleChangeColor} />
                        </div>
                    </div>
                    <div className={styles['item-container']}>
                        <label className={styles['item-label']}> Username </label>
                        <input name="username" className={(this.props.usernameInvalid ? styles['invalid-field'] : styles['valid-field']) + ' ' + styles['input']} type="text" placeholder={this.props.username} value={this.state.username} onChange={this.handleChange}
                          ref={(input) => { this.usernameInput = input; }} />
                        <label className={styles['tooltip']} data-tip="Username must be at least 8 characters long">?</label>
                        <ReactTooltip place="bottom" />


                    </div>
                    <div className={styles['item-container']}>
                    <label className={styles['item-label']}> Email </label>
                    <input name="email" className={(this.props.emailInvalid ? styles['invalid-field'] : styles['valid-field']) + ' ' + styles['input']} type="text" placeholder={this.props.email} value={this.state.email} onChange={this.handleChange} />
                    <label className={styles['tooltip']} data-tip="Email must be a valid email"> ? </label>
                    <ReactTooltip place="bottom" />

                    </div>
                    <div className={styles['item-container']}>
                    <label className={styles['item-label']}> New Password </label>
                    <input name="password1" className={(this.props.passwordInvalid ? styles['invalid-field'] : styles['valid-field']) + ' ' + styles['input']} type="password" placeholder="Change password" value={this.state.password1} onChange={this.handleChange} />

                    <label className={styles['tooltip']} data-tip="Password must be at least 8 characters">?</label>
                    <ReactTooltip place="bottom" />
                    <label className={styles['item-label']}> Confirm Password </label>
                    <input name="password2" className={(this.props.passwordInvalid ? styles['invalid-field'] : styles['valid-field']) + ' ' + styles['input']} type="password" placeholder="Verify new password" value={this.state.password2} onChange={this.handleChange} />
                    </div>
                    


                    <input type="submit" className={styles['settings-submit'] + ' transition'} value="Save" />
                    {this.props.success && <div className={styles['success']}></div>}
                </form>
            </div>
        </div>
        );
  }
}

Settings.need = [() => { return loadSettings(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
      emailInvalid: state.settings.emailInvalid,
      passwordInvalid: state.settings.passwordInvalid,
      usernameInvalid: state.settings.usernameInvalid,
      success: state.settings.success,
      color: state.header.color,
      username: state.header.username,
      email: state.header.email,
      profile_pic: state.header.profile_pic
      ? String.fromCharCode.apply(null, new Uint16Array(state.header.profile_pic.data))
      : null
  };
}

Settings.propTypes = {
    dispatch: PropTypes.func.isRequired,
    emailInvalid: PropTypes.bool.isRequired,
    passwordInvalid: PropTypes.bool.isRequired,
    usernameInvalid: PropTypes.bool.isRequired,
    success: PropTypes.bool.success,
    //color: PropTypes.string.isRequired,
    //username: PropTypes.string.isRequired,
    //email: PropTypes.string.isRequired,
};

Settings.contextTypes = {
    router: React.PropTypes.object,
};

export default connect(mapStateToProps)(Settings);
