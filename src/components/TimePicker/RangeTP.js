import React from 'react'
import  moment from 'moment'
import {TimePicker  as AntTimePicker} from 'antd'

const timeFormat = 'HH:mm';

class RangeTp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startValue: null,
            endValue: null,
        };
    };

    onChange = (field, value) => {
        if (!value) {
            this.setState({
                startValue: value,
                endValue: value,
            });
        } else if (field === 'endValue' && value) {
            let start = this.state.startValue;
            this.setState({
                [field]: value,
            });

            if(!start){
                const {rangeSet} = this.props;
                const {defaultStartValue} = rangeSet;
                start = defaultStartValue || value;
            }

            this.props.onChange([start, value]);
        }
        else {
            this.setState({
                [field]: value,
                endValue: value,
            });
            this.props.onChange([value, value]);
        }
    };

    disabledEndH = () => {
        const {startValue} = this.state;
        const h = startValue ? parseInt(startValue.format('HH')) : 0;
        return [...Array.from(Array(h).keys())];
    };
    disabledEndM = (end) => {
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

    render() {
        const {delimiter, minuteStep} = this.props;
        const {rangeSet} = this.props;
        const {defaultStartValue, defaultEndValue} = rangeSet;
        const {placeholderStart = ' ', placeholderEnd = ' '} = rangeSet;

        const {startValue, endValue} = this.state;


        return (
            <div className="timepicker-base-range">
                <AntTimePicker format={timeFormat}
                               minuteStep={minuteStep}
                               placeholder={defaultStartValue
                                   ? moment(defaultStartValue).format('HH:mm') : placeholderStart}

                               value={startValue}
                               onChange={(val) => this.onChange('startValue', val)}/>

                {delimiter && <span className="timepicker-base-range-delim"> {delimiter} </span>}

                <AntTimePicker format={timeFormat}
                               minuteStep={minuteStep}
                               placeholder={defaultEndValue
                                   ? moment(defaultEndValue).format('HH:mm') : placeholderEnd}

                               value={endValue}
                               disabledHours={() => this.disabledEndH()}
                               disabledMinutes={() => this.disabledEndM(endValue)}
                               onChange={(val) => {
                                   this.onChange('endValue', val)
                               }}/>
            </div>
        )
    }
}

export default  RangeTp;