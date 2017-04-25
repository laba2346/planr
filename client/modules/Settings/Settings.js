import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import styles from './Settings.css';
import { resetSuccess, changeSettingRequest, checkIfFieldsValid, changeProfilePicRequest, checkIfProfilePicValid, changeTheme } from './SettingsActions.js'
import { CirclePicker } from 'react-color';
import { addSettings, loadSettings } from '../Header/HeaderActions';
import Avatar from 'react-avatar';
var Dropzone = require('react-dropzone');

class Settings extends Component {

    componentDidMount() {
        this.props.dispatch(loadSettings());
        this.usernameInput.focus();
    }

    constructor () {
        super();
        this.state = {color: '', username: '', password1: '', password2: '', email: '', profile_pic: null};
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeColor = this.handleChangeColor.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onDrop = this.onDrop.bind(this);
        //this.props.dispatch(loadSettings());
    }

    handleSubmit(event){
        console.log(this.state);
        event.preventDefault();
        if(this.props.dispatch(checkIfFieldsValid(this.state))){
            this.props.dispatch(changeSettingRequest(this.state))
            this.state = {color: '', username: '', password1: '', password2: '', email: ''};
        }
        if(this.props.dispatch(checkIfProfilePicValid(this.state))){
            this.props.dispatch(changeProfilePicRequest(this.state))
        }
        else{
            console.log("didn't send to server")
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

        return (
        <div>
            <div className={styles['settings-avatar']}>
                <label className={styles['settings-label']}>Profile Picture</label><br />
                <Avatar name={this.props.username} color={this.props.color} src={this.props.profile_pic} size={180} round={true} />
                <Dropzone accept="image/*" maxSize={250 * 1024} onDrop={this.onDrop} multiple={false} style={dropzoneStyle}>
                {({ isDragActive, isDragReject, acceptedFiles, rejectedFiles }) => {
                  if (isDragActive) {
                    return "New profile picture accepted";
                  }
                  if (isDragReject) {
                    return "Only image files smaller than 250K are accepted";
                  }
                  if (acceptedFiles.length) {
                    return `Accepted ${acceptedFiles[0].name}`;
                  } else {
                    return "Drop an image here, or click to choose a file";
                  }
                }}
              </Dropzone>
             </div>

            <form className={styles['settings-form']} onSubmit={this.handleSubmit}>
                <label className={styles['settings-label']}> Theme Color </label>
                <CirclePicker circleSpacing='10'color={this.state.color} onChangeComplete={this.handleChangeColor} />
                <input name="username" className={styles['valid-field'] + ' ' + styles['input']} type="text" placeholder="Change username" value={this.state.username} onChange={this.handleChange}
                  ref={(input) => { this.usernameInput = input; }} />
                <input name="email" className={(this.props.emailInvalid ? styles['invalid-field'] : styles['valid-field']) + ' ' + styles['input']} type="text" placeholder="Change email" value={this.state.email} onChange={this.handleChange} />
                <input name="password1" className={(this.props.passwordInvalid ? styles['invalid-field'] : styles['valid-field']) + ' ' + styles['input']} type="password" placeholder="Change password" value={this.state.password1} onChange={this.handleChange} />
                <input name="password2" className={(this.props.passwordInvalid ? styles['invalid-field'] : styles['valid-field']) + ' ' + styles['input']} type="password" placeholder="Verify new password" value={this.state.password2} onChange={this.handleChange} />
                <input type="submit" className={styles['settings-submit'] + ' transition'} value="Save" />
                {this.props.success && <div className={styles['success']}></div>}
            </form>
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
    success: PropTypes.bool.success,
    //color: PropTypes.string.isRequired,
    //username: PropTypes.string.isRequired,
    //email: PropTypes.string.isRequired,
};

Settings.contextTypes = {
    router: React.PropTypes.object,
};

export default connect(mapStateToProps)(Settings);
