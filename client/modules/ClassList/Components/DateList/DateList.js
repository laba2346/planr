import React, { PropTypes } from 'react';
import Classt from '../Class/Class';
import styles from './DateList.css';
import moment from 'moment';

/**
    Renders all the classes. Variable background color based on theme.
    @param {Object} props The properies inherited from DateList
    @param {Object} context The context.
*/
function DateList(props, context) {
    var date = new Date(props.dateObject.date);
    //var day = moment(date).format("dddd, MMMM Do");
    var dayOfWeek = moment(date).format("ddd");
    var day = moment(date).format("D");

    var backgroundStyle = {
        backgroundColor: props.color
    }
    return (
        <div className={styles['date-list']} style={backgroundStyle}>
            <div className={styles['day-block']}>
                <label className={styles['dayOfWeek-label']}>{dayOfWeek}</label>
                <label className={styles['day-label']}>{day}</label>
            </div>
            <div className={styles['class-list-container']}>
            {
                props.dateObject.classes.map(_class => (
                  <div key={_class.id}>
                    <Class
                        _class={_class}
                    />
                  </div>
                ))
            }
            </div>
        </div>
    );
}

DateList.propTypes = {
  dateObject: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default DateList;
