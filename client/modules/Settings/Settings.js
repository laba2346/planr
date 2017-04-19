import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import styles from './Settings.css';
import { changeSettingRequest } from './SettingsActions.js'
import { CirclePicker } from 'react-color';

class Settings extends Component {

    constructor () {
        super();
        this.state = {color: '', username: '', password1: '', password2: '', email: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeColor = this.handleChangeColor.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    changeSetting (formdata) {
        this.props.dispatch(changeSettingRequest(formdata))
    }

    handleSubmit(event){
        event.preventDefault();
        this.changeSetting(this.state);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
    }
    handleChangeColor = (color) => {
        console.log(color.hex)
        this.setState({ color: color.hex });
    };


    render() {
        return (
            <div>
            <form className={styles['settings-form']} onSubmit={this.handleSubmit}>
                <label className={styles['settings-label']}> select themes color </label>
                <CirclePicker circleSpacing='10'color={this.state.color} onChangeComplete={this.handleChangeColor} />
                <input name="username" className={styles['valid-field'] + ' ' + styles['input']} type="text" placeholder="Change username" value={this.state.username} onChange={this.handleChange} />
                <input name="email" className={styles['valid-field'] + ' ' + styles['input']} type="text" placeholder="Change email" value={this.state.email} onChange={this.handleChange} />
                <input name="password1" className={styles['valid-field'] + ' ' + styles['input']} type="password" placeholder="Change password" value={this.state.password1} onChange={this.handleChange} />
                <input name="password2" className={styles['valid-field'] + ' ' + styles['input']} type="password" placeholder="Verify new password" value={this.state.password2} onChange={this.handleChange} />
                <input type="submit" className={styles['settings-submit'] + ' transition'} value="Save" />
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

Settings.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

Settings.contextTypes = {
    router: React.PropTypes.object,
};

export default connect(mapStateToProps)(Settings);
