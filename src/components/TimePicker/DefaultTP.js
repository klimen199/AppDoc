import React from 'react'

import {TimePicker  as AntTimePicker} from 'antd'
import moment from "moment/moment";
import TimePicker from "./index";
import PropTypes from "prop-types";



class DefaultTp extends React.Component {
    constructor(props) {
        super(props);
        let ar = [];
        for(let i = 0; i < 60; i++)
            ar.push(i);
        this.state = {
            startValue: moment("07:06", "hh:mm"),
            curValue: this.props.value || null,
            trueHour: this.getAvailableHour(),
            falseHour: this.getNotAvailableHour(),
            trueMin: [],
            falseMin: ar,
        };
    };



    getNotAvailableHour = () => { // получить массив из не доступных часов
        return this.falseHour;
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
    getNotAvailableMin = (hour) => { // получить массив из доступных часов
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
        if( countQqual > 1) errorMin = [];
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
            minCheck = arrayGoodMin[0];
        }
        this.setState({falseMin : arrayMin });
        if (array.indexOf(hourCheck) === -1 || arrayMin.indexOf(minCheck) !== -1)
            return;


        if (!value) {
            this.setState({
                startValue: value,
                curValue: value,
            });
        } else if (field === 'curValue' && value) {
            let start = this.state.startValue;
            this.setState({
                [field]: value,
            });

            if(!start){
                const {rangeSet} = this.props;
                const {defaultStartValue} = rangeSet;
                start = defaultStartValue || value;
            }
            //новое значение в свойстве _d
            this.props.onChange(value);
        }
        else {
            this.setState({
                [field]: value,
                curValue: value,
            });
            this.props.onChange(value);
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
                curValue: null,
            })
        }
    }

    render() {
        const {format, placeholder, minuteStep} = this.props;

        const myprops = (this.state.curValue) ?
            {
                format : format,
                placeholder : placeholder,
                minuteStep : minuteStep,
                value : this.state.curValue
            } :
            {
                format : format,
                placeholder : placeholder,
                minuteStep : minuteStep
            };

        return (
            <AntTimePicker {...myprops}
                           disabledHours={() => this.disabledEndH()}
                           disabledMinutes={() => this.disabledEndM()}
                           onChange={(val) => {
                               this.onChange('curValue', val)
                           }}
                            />
        )
    }
}

DefaultTp.propTypes = {
    placeholder: PropTypes.string, // отображается когда нет вермени
    availableArea: PropTypes.array, // доступный промежуток времени
    format: PropTypes.string, //"HH:mm:ss"
    onChange: PropTypes.func,
    minuteStep: PropTypes.number
};

DefaultTp.defaultProps = {
    placeholder: " ",
    value: null,
    availableArea: [],
    format: "HH:mm",
    minuteStep: 5,
    onChange: () => {},
};

export default  DefaultTp;