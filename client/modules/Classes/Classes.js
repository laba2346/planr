import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import ClassList from '../ClassList/ClassList';
import styles from './Classes.css';

class Classes extends Component {

    constructor () {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className={styles['classes-container']} >
                <ClassList />
            </div>
        );
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {

  };
}

Classes.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

Classes.contextTypes = {
    router: React.PropTypes.object,
};

export default connect(mapStateToProps)(Classes);
