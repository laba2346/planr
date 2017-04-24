import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import styles from './Calendar.css';
import { convertAssignments } from './CalendarActions'
import BigCalendar from 'react-big-calendar';
import moment from 'moment'

class Calendar extends Component {
    componentDidMount() {
        console.log(this.props.assignments)    
        this.props.dispatch(convertAssignments(this.props.assignments));
    }

    constructor () {
        super();
        this.state = {events: []}
        BigCalendar.momentLocalizer(moment);
        //this.props.dispatch(convertAssignments(this.props.assignments))
    }

    render(){
        return (
        <BigCalendar
          {...this.props}
          events={this.props.events}
          defaultDate={new Date()}
        />
        )
    }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
      assignments: state.assignmentlist.assignments,
      events: state.calendar.events,
  };
}

Calendar.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

Calendar.contextTypes = {
    router: React.PropTypes.object,
};

export default connect(mapStateToProps)(Calendar);
