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

    changeIntervalDate = (start, end) => {
        return {
            start: new Date((+start)*1000),
            end: new Date((+end)*1000),
        }
    }

    changeSchedule = () => {
        let newSched = this.props.schedules ? this.props.schedules.map((sched)=>{
            const {intervalOb,intervalEx} = sched;
            let newIntervalOb = [];
            for(let i = 0, len = intervalOb.length; i < len; i++){
                let interv = intervalOb[i];
                newIntervalOb.push(this.changeIntervalDate(interv.start, interv.end))
            }

            let newIntervalEx = [];
            for(let i = 0, len = intervalEx.length; i < len; i++){
                let interv = intervalEx[i];
                newIntervalEx.push(this.changeIntervalDate(interv.start, interv.end))
            }

            return {
                ...sched,
                intervalOb: newIntervalOb,
                intervalEx: newIntervalEx,
            }

        }) : [];

        return newSched;
    }

    changeEvents = () => {
        let newEvents = this.props.events ? this.props.events.map((event) => {
            return {
                ...event,
                ...this.changeIntervalDate(event.start, event.end),
            }
        }) : [];

        return newEvents;
    }
    
    render() {       

        let prop = this.props.editor ? {
                ...this.props,
                schedules: this.changeSchedule(),
            }
            : {
                ...this.props,
                events: this.changeEvents(),
            }

        return (<div>
            {
                this.props.editor ?
                    <Calendar
                        className='calendar-editor'
                        schedules={this.changeSchedule()}
                        view={'month'}
                        onView={() => {
                        }}
                        onSelecting={(r,slot,selecting, schedule) =>
                            this.selectHandler(r, slot,selecting, schedule)}
                        {...prop}
                    />
                    :
                    <Calendar
                        events={this.changeEvents()}
                        defaultView={'week'}
                        views={['day', 'week', 'month']}

                        {...prop}
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