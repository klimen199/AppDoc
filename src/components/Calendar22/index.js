import React from 'react'
import PropTypes from 'prop-types'

import moment from 'moment';

import Calendar from './libr/Calendar'
import momentLocalizer from './libr/localizers/moment.js'

import './react-big-calendar.css'
import './style.css'

moment.locale('ru');
momentLocalizer(moment);

class BigCalendar extends React.Component{
    state = {
        dayRange: [],
    };

    selectHandler = (range, slotInfo,selecting, schedule) => {
        if (slotInfo.action === 'click'){
            this.props.onMonthSelect(range, schedule)
            // console.log('RETURN', range)
            return
        }
        if (selecting === true && this.state.dayRange.length !== 0){
            this.setState({dayRange: []})
        }
        else{
            if (range.length !== 0) {
                this.setState({dayRange: this.state.dayRange.concat(range)})
                this.props.onMonthSelect(this.state.dayRange)
                    // console.log('RETURN', this.state.dayRange)
            }
        }
    };
    
    render() {
        return (<div>
            {
                this.props.editor ?
                    <Calendar
                        className='calendar-editor'
                        schedules={this.props.schedules}
                        view={'month'}
                        onView={() => {
                        }}
                        onSelecting={(r,slot,selecting, schedule) =>
                            this.selectHandler(r, slot,selecting, schedule)}
                        {...this.props}
                    />
                    :
                    <Calendar
                        events={this.props.events}
                        defaultView={'week'}
                        views={['day', 'week', 'month']}

                        {...this.props}
                    />
            }
        </div>);
    }
}

BigCalendar.propTypes = {
    events: PropTypes.array,
    schedules: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            isEditable: PropTypes.bool,
            intervalOb: PropTypes.array,
            intervalEx: PropTypes.array,
        })
    ),
    receptionNum: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    editor: PropTypes.bool,
    onPopoverClose: PropTypes.func,
    onPopoverEmail: PropTypes.func,
};


BigCalendar.defaultProps = {
    events: [],
    schedules: [],
    receptionNum: 0,
    editor: false,
    onPopoverClose: () => {},
    onPopoverEmail: () => {},
};


export default BigCalendar;