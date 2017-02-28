import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Description from '../components/Description/Description';
import SignUp from '../components/SignUp/SignUp';
import {sendSignUpRequest} from '../LandingActions';
import styles from './Landing.css'

class Landing extends Component {

    signUp = function(formState){
        sendSignUpRequest(formState);
    }

    render() {
        return (
            <div className={styles['landing-container']}>
                <div className={styles['DescriptionContainer']}>
                    <Description />
                </div>
                <div className={styles['SignUpContainer']}>
                    <SignUp signUp={this.signUp} />
                </div>
            </div>
        );
    }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {

  };
}

Landing.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

Landing.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(Landing);