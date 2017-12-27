import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import {DatePicker as AntDatePicker} from 'antd'

import './styles.css'

const dateFormat = 'DD.MM.YYYY';

class DatePicker extends React.Component{
    constructor(props){
        super(props);
        const {rangeSet} = props;
        const {defaultStartValue,defaultEndValue} = rangeSet;

        this.state = {
            startValue: defaultStartValue,
            endValue: defaultEndValue,
            endChosen: !!defaultStartValue && !!defaultEndValue,
            defaultEnd: null,
        };
    }

    disabledStartDate = (startValue) => {
        const endValue = this.state.endValue;
        if (!startValue || !endValue) {
            return false;
        }
        return startValue.valueOf() > endValue.valueOf();
    };

    disabledEndDate = (endValue) => {
        const startValue = this.state.startValue;
        if (!endValue || !startValue) {
            return false;
        }
        return endValue.valueOf() <= startValue.valueOf();
    };

    onChange = (field, value) => {
        (field === 'endValue' && value) ?
            this.setState({
                [field]: value,
                defaultEnd: value,
                endChosen: true,
            })
            :
            this.setState({
                [field]: value,
                defaultEnd: value,
                endChosen: false,
            })
    };

    render(){
        const {defaultValue, range, rangeSet, time, delimiter} = this.props;
        const {placeholderStart,placeholderEnd} = rangeSet;
        const { startValue, endValue,defaultEnd, endChosen } = this.state;

        const classRPend = cn({'datepicker-base-range-chosen': endChosen});

        return (
            <div className="datepicker-base">

                {/*<Icon type="calendar"/>*/}

                {range ? (
                        <div className="datepicker-base-range">
                            <AntDatePicker format={dateFormat}
                                           placeholder={placeholderStart}
                                           className="datepicker-base-range-chosen"

                                           disabledDate={this.disabledStartDate}
                                           value={startValue}
                                           onChange={(val) => this.onChange('startValue', val)}/>

                            {delimiter && <span className="datepicker-base-range-delim"> {delimiter} </span>}

                            <AntDatePicker format={dateFormat}
                                           placeholder={placeholderEnd}
                                           className={classRPend}

                                           disabledDate={this.disabledEndDate}
                                           value={defaultEnd}
                                           onChange={(val) => this.onChange('endValue', val)}/>
                        </div>
                    ) : (
                        time ? (
                                <div>-</div>
                            ) : (
                                <AntDatePicker defaultValue={defaultValue}
                                               format={dateFormat}
                                               placeholder={'дата'}/>
                            )
                    )
                }
            </div>
        )
    }
}

DatePicker.propTypes = {
    defaultValue: PropTypes.object,
    range: PropTypes.bool,
    rangeSet: PropTypes.shape({
        defaultStartValue: PropTypes.object,
        placeholderStart: PropTypes.string,
        defaultEndValue: PropTypes.object,
        placeholderEnd: PropTypes.string,
    }),
    time: PropTypes.bool,
    delimiter: PropTypes.string,
};

DatePicker.defaultProps = {
    defaultValue: null,
    range: false,
    rangeSet: {},
    time: false,
    delimiter: '',
};

export default  DatePicker;