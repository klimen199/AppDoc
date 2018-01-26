import React from 'react'
import PropTypes from 'prop-types'

import moment from 'moment';

import Calendar from './libr/Calendar'
import momentLocalizer from './libr/localizers/moment.js'

import './react-big-calendar.css'
import './styles.css'

moment.locale('ru');
momentLocalizer(moment);

const BigCalendar = (props) => {


    return (<div>
        <Calendar
            events={props.events}
            views={['day','week','month']}

            {...props}
        />
    </div>);
};

BigCalendar.propTypes = {
    events: PropTypes.array,
    receptionNum: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),

};

BigCalendar.defaultProps = {
    events: [],
    receptionNum: 0,
};

export default BigCalendar;