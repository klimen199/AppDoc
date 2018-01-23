import React from 'react'
import PropTypes from 'prop-types'

import moment from 'moment';

import Calendar from './libr/Calendar'
import momentLocalizer from './libr/localizers/moment.js'

import './react-big-calendar.css'
import './styles.css'

momentLocalizer(moment);

const Calendar22 = (props) => {

    return (<div>
        <Calendar
            events={props.events}
            views={['day','week','month']}
            {...props}
        />
    </div>);
};

Calendar22.propTypes = {
    events: PropTypes.array,
    receptionNum: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),

};

Calendar22.defaultProps = {
    events: [],
    receptionNum: 0,
};

export default Calendar22;