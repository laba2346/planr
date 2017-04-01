import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import styles from './Settings.css';
import { changeSettingRequest } from './SettingsActions.js'

class Settings extends Component {

    constructor () {
        super();
        this.state = {color: ''};
        this.handleChange = this.handleChange.bind(this);
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


    render() {
        return (
            <div>
            <form className={styles['sign-up-form']} onSubmit={this.handleSubmit}>
                <label> Color Theme </label>
                <input name="Color Theme" className={styles['valid-field'] + ' ' + styles['input']} type="text" placeholder="Color" value={this.state.color} onChange={this.handleChange} />
                <input type="submit" className={styles['sign-up-submit'] + ' transition'} value="Submit" />
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
