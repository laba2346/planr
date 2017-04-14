import React, { PropTypes, Component} from 'react';
import { connect } from 'react-redux';
import CreateAssignments from '../Classes/Classes';
//import styles from './ClassesView.css';

class ClassesView extends Component {
    constructor()
    {
        super();
        this.state = {}
    }

    render() {
        return(
                <div>
                    <View Classes />
                </div>
              );
    }
} 

//Retrive date from store as props
function mapStateToProps(state) {
    return {

    };
}

ClassesView.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

ClassesView.contextTypes = {
    router: React.PropTypes.object
};

export default connect(mapStateToProps)(ClassesView);
