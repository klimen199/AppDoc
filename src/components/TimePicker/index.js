import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import {TimePicker  as AntTimePicker } from 'antd'

import './styles.css'

const timeFormat = 'HH:mm';

class TimePicker extends React.Component{
    constructor(props){
        super(props);
        const {rangeSet} = props;
        const {defaultStartValue,defaultEndValue} = rangeSet;

        this.state = {
            startValue: defaultStartValue,
            endValue: defaultEndValue,
            defaultEnd: null,
        };
    };

    onChange = (field, value) => {
        (field === 'endValue' && value) ?
            this.setState({
                [field]: value,
                defaultEnd: value,
            })
            :
            this.setState({
                [field]: value,
                defaultEnd: value,
            })
    };

    disabledEndH = () =>{
        const {startValue} = this.state;
        const h = startValue ? parseInt(startValue.format('HH')) : 0;
        return [...Array.from(Array(h).keys())];
    };
    disabledEndM = (end) =>{
        const {startValue} = this.state;
        if (!startValue)
            return [];
        const endH = parseInt(end.format('HH')),
            startH = parseInt(startValue.format('HH')),
            startM = parseInt(startValue.format('mm'));
        if (endH === startH)
            return [...Array.from(Array(startM).keys())];
        return [];
    };

    render(){
        const {range, delimiter, rangeSet, minuteStep, placeholder, defaultValue} = this.props;
        const {placeholderStart = ' ', placeholderEnd = ' '} = rangeSet;

        const {startValue, endValue, defaultEnd} = this.state;
        // const classRPend = cn({'datepicker-base-range-chosen': endChosen});

        return (
            <div className="timepicker-base">
                {
                    range ? (
                        <div className="timepicker-base-range">
                            <AntTimePicker format={timeFormat}
                                           minuteStep={minuteStep}
                                           placeholder={placeholderStart}

                                           value={startValue}
                                           onChange={(val) => this.onChange('startValue', val)}/>
                            {delimiter && <span className="timepicker-base-range-delim"> {delimiter} </span>}
                            <AntTimePicker format={timeFormat}
                                           minuteStep={minuteStep}
                                           placeholder={placeholderEnd}

                                           value={defaultEnd}
                                           disabledHours={()=>this.disabledEndH()}
                                           disabledMinutes = {()=>this.disabledEndM(defaultEnd)}
                                           onChange={(val) => this.onChange('endValue', val)}/>
                        </div>
                        ) : (
                            <AntTimePicker format={timeFormat}
                                           defaultValue={defaultValue}
                                           placeholder={placeholder}
                                           minuteStep={minuteStep}/>
                        )
                }
            </div>
        )
    }
}

TimePicker.propTypes = {
    defaultValue: PropTypes.object,
    range: PropTypes.bool,
    rangeSet: PropTypes.shape({
        defaultStartValue: PropTypes.object,
        placeholderStart: PropTypes.string,
        defaultEndValue: PropTypes.object,
        placeholderEnd: PropTypes.string,
    }),
    placeholder: PropTypes.string,
    minuteStep: PropTypes.number,
    delimiter: PropTypes.string,
};

TimePicker.defaultProps = {
    defaultValue: null,
    range: false,
    rangeSet: {},
    placeholder: ' ',
    minuteStep: 5,
    delimiter: ' ',
};

export default  TimePicker;