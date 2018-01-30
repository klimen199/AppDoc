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

    selectHandler = (range, slotInfo,selecting) => {
        if (slotInfo.action === 'click'){
            this.props.onMonthSelect(range)
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
                        events={this.props.events}
                        view={'month'}
                        onView={() => {
                        }}
                        onSelecting={(r,slot,selecting) => this.selectHandler(r, slot,selecting)}

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
};

BigCalendar.propTypes = {
    events: PropTypes.array,
    receptionNum: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    editor: PropTypes.bool,
};

BigCalendar.defaultProps = {
    events: [],
    receptionNum: 0,
    editor: false,
};

export default BigCalendar;