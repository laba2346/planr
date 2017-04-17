import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { fetchClasses } from './ClassListActions';
import styles from './ClassList.css';

class ClassList extends Component {
    componentDidMount() {
           this.props.dispatch(fetchClasses());
    }

    constructor () {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className={styles['classes-list-container']}>
            {
                this.props.classes.map(ClassArray => (
                  <div key={ClassArray.key}>
                    <DateList
                        classes={ClassArray}
                    />
                  </div>
                ))
            }
            </div>
        );
  }
}

ClassList.need = [() => { return fetchclasses(); }];


// Retrieve data from store as props
function mapStateToProps(state) {
    return {
        classes: state.Classlist.classes
    };
}

ClassList.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

ClassList.contextTypes = {
    router: React.PropTypes.object,
};

export default connect(mapStateToProps)(ClassList);
