import React from 'react'
import PropTypes from 'prop-types'

import RangeTP from './RangeTP'
import DefaultTP from './DefaultTP'

import './styles.css'
const timeFormat = 'HH:mm';

class TimePicker extends React.Component{

    render(){
        const {range,minuteStep, placeholder, defaultValue, onChange} = this.props;

        return (
            <div className="timepicker-base">
                {
                    range ? (
                        <RangeTP {...this.props}/>
                        ) : (
                            <DefaultTP format={timeFormat}
                                       defaultValue={defaultValue}
                                       placeholder={placeholder}
                                       minuteStep={minuteStep}
                                       {...this.props}/>
                        )
                }
            </div>
        )
    }
}

TimePicker.propTypes = {
    //defaultValue: PropTypes.object,
    range: PropTypes.bool,
    rangeSet: PropTypes.shape({
        defaultStartValue: PropTypes.object,
        placeholderStart: PropTypes.string,
        defaultEndValue: PropTypes.object,
        placeholderEnd: PropTypes.string,
    }),
    isReset: PropTypes.bool,
    placeholder: PropTypes.string,
    minuteStep: PropTypes.number,
    delimiter: PropTypes.string,
    onChange: PropTypes.func,
};

TimePicker.defaultProps = {
    //defaultValue: null,
    range: false,
    rangeSet: {},
    isReset: false,
    placeholder: ' ',
    minuteStep: 5,
    delimiter: ' ',
    onChange: () => {},
};

export default  TimePicker;