import React from 'react'
import  moment from 'moment'
import {TimePicker  as AntTimePicker} from 'antd'
import PropTypes from "prop-types";
import DefaultTp from "./DefaultTP";


class RangeTp extends React.Component {
    constructor(props) {
        super(props);
        let ar = [];
        for(let i = 0; i < 60; i++)
            ar.push(i);
        this.state = {
            startValue: this.props.rangeSet.defaultStartValue || null,
            endValue: this.props.rangeSet.defaultEndValue || null,
            trueHour: this.getAvailableHour(),
            falseHour: this.getNotAvailableHour(),
            trueMin: [],
            falseMin: ar,

        };

    };

    getNotAvailableHour = () => { // получить массив из не доступных часов
        if(this.props.availableArea.length)
            return this.falseHour;

        return [...Array.from(Array(24).keys())];
    };

    getAvailableHour = () => { // получить массив из доступных часов
        const area = this.props.availableArea;
        let errorHour = [];
        let availableHour = [];
        for(let hour = 0; hour < 24; hour++){
            for(let i = 0; i < area.length; i++){
                if(parseInt(area[i].from.format('HH')) <= hour
                   && hour <= parseInt(area[i].to.format('HH'))){
                    availableHour.push(hour);
                    break;
                }
            }
        }
        for(let j = 0; j < 24; j++)
            if(availableHour.indexOf(j) === -1 ) errorHour.push(j);

        this.falseHour = errorHour;
        return availableHour;
    };

    // выбранный час
    getNotAvailableMin = (hour) => {

        const area = this.props.availableArea;
        let errorMin = []; // ответ
        let countQqual = [];

        for(let i = 0; i < area.length; i++) {
            let beforeH = parseInt(area[i].from.format('HH'));
            let beforeM = parseInt(area[i].from.format('mm'));
            if (hour === beforeH) {
                errorMin = [...Array.from(Array(beforeM).keys())];
                countQqual++
            }
            let afterH = parseInt(area[i].to.format('HH'));
            let afterM = parseInt(area[i].to.format('mm'));
            if (hour === afterH) {
                let buf = [...Array.from(Array(60).keys())];
                buf = buf.splice(afterM, 60);
                errorMin = [...errorMin, ...buf];
                countQqual++
            }
        };

        //if( countQqual > 1) errorMin = [];
        return errorMin;
    };

    getAvailableMin = (notMin) => {
      let min = [];
      for(let i = 0; i < 60; i++ ){
          if( notMin.indexOf(i) === -1)
              min.push(i);
      }
      return min;
    };
    onChange = (field, value) => {
        //начальная проверка
        const hourCheck = value._d.getHours();
        let minCheck = value._d.getMinutes();
        const array = this.getAvailableHour();
        const arrayMin = this.getNotAvailableMin(parseInt(value.format('HH')));
        const arrayGoodMin = this.getAvailableMin(arrayMin);

        if(arrayGoodMin.indexOf(minCheck) === -1 ){
            value.minute(arrayGoodMin[0]); //1-ая доступная минута
            minCheck = arrayGoodMin[0]; // по умолчанию - первая
            for(let i = 0; i < arrayGoodMin.length; i++){
                if(arrayGoodMin[i] % this.props.minuteStep === 0){
                    value.minute(arrayGoodMin[i]); //кратна
                    minCheck = arrayGoodMin[i];
                    break;
                }
            }
        }
        this.setState({falseMin : arrayMin });

        if (array.indexOf(hourCheck) === -1 || arrayMin.indexOf(minCheck) !== -1)
            return;

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
        return  this.state.falseHour;
    };
    disabledEndM = () => {
        return this.state.falseMin;
    };

    componentWillReceiveProps(nextProps){
        if(nextProps.isReset !== this.props.isReset && nextProps.isReset === true){
            this.setState({
                startValue: null,
                endValue: null,
            })
        }

        if((nextProps.rangeSet.defaultStartValue !== this.props.rangeSet.defaultStartValue) ||
            (nextProps.rangeSet.defaultEndValue !== this.props.rangeSet.defaultEndValue)) {
            this.setState ({
                startValue: nextProps.rangeSet.defaultStartValue,
                endValue: nextProps.rangeSet.defaultEndValue
            })
        }

    }

    render() {
        const {format,delimiter, minuteStep} = this.props;
        const {rangeSet} = this.props;
        const {defaultStartValue, defaultEndValue} = rangeSet;
        const {startValue, endValue} = this.state;

        const myprops1 = (this.state.startValue) ?
            {
                placeholder: this.props.rangeSet.placeholderStart,
                value: this.state.startValue
            } :
            {
                placeholder: this.props.rangeSet.placeholderStart,
                value: null
            };
        const myprops2 = ( this.state.endValue) ?
            {
                placeholder: this.props.rangeSet.placeholderEnd,
                value: this.state.endValue
            } :
            {
                placeholder: this.props.rangeSet.placeholderEnd,
                value: null
            };


        return (
            <div className="timepicker-base-range">
                <AntTimePicker {...myprops1}
                               format={format}
                               minuteStep={minuteStep}
                               onChange={(val) => this.onChange('startValue', val)}
                               disabledHours={() => this.disabledEndH()}
                               disabledMinutes={() => this.disabledEndM()}/>

                {delimiter && <span className="timepicker-base-range-delim"> {delimiter} </span>}

                <AntTimePicker {...myprops2}
                               format={format}
                               minuteStep={minuteStep}
                               disabledHours={() => this.disabledEndH()}
                               disabledMinutes={() => this.disabledEndM()}
                               onChange={(val) => {
                                   this.onChange('endValue', val)
                               }}/>
            </div>
        )
    }
}



RangeTp.propTypes = {
    availableArea: PropTypes.array, // доступный промежуток времени
    format: PropTypes.string, //"HH:mm:ss"
    onChange: PropTypes.func,
    minuteStep: PropTypes.number,
    rangeSet: PropTypes.shape({
        defaultStartValue: PropTypes.object,
        placeholderStart: PropTypes.string,
        defaultEndValue: PropTypes.object,
        placeholderEnd: PropTypes.string,
    }),
};

RangeTp.defaultProps = {
    value: null,
    availableArea: [],
    format: "HH:mm",
    minuteStep: 5,
    onChange: () => {},
};

export default  RangeTp;