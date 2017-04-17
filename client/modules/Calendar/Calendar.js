import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import styles from './Calendar.css';
import BigCalendar from 'react-big-calendar';
import events from './events.js'
import moment from 'moment'

class Calendar extends Component {

    constructor () {
        super();
        this.state = {}
        BigCalendar.momentLocalizer(moment);
    }

    render(){
        return (
        <BigCalendar
          {...this.props}
          events={events}
          defaultDate={new Date(2015, 3, 1)}
        />
        )
    }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {

  };
}

Calendar.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

Calendar.contextTypes = {
    router: React.PropTypes.object,
};

export default connect(mapStateToProps)(Calendar);
