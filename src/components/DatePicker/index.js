import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import {DatePicker as AntDatePicker, Icon} from 'antd'
const { RangePicker } = AntDatePicker;

import './styles.css'


const dateFormat = 'DD.MM.YYYY';

class DatePicker extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {defaultValue, range, time} = this.props;

        return (
            <div className="datepicker-base">

                <Icon type="calendar"/>

                {range ? (
                    <div>
                        <Icon type="calendar"/>
                        <AntDatePicker defaultValue={defaultValue}
                                       format={dateFormat}
                                       style={{border:'1px solid black'}}
                                       placeholder={'c'}/>
                        <Icon type="calendar"/>
                        <AntDatePicker defaultValue={defaultValue}
                                       format={dateFormat}
                                       style={{border:'1px solid black'}}
                                       placeholder={'по'}/>
                    </div>
                    ) : (
                        time ? (
                                <AntDatePicker showTime format="HH:mm"
                                               onOpenChange={e=>console.log('onChangeOpen',e)}
                                               ref={dp => console.log(dp)}/>
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
    time: PropTypes.bool,
};

DatePicker.defaultProps = {
    defaultValue: null,
    range: false,
    time: false,
};

export default  DatePicker;