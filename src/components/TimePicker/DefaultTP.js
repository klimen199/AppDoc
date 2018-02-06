import React from 'react'

import {TimePicker  as AntTimePicker} from 'antd'

const timeFormat = 'HH:mm';

class DefaultTp extends React.Component {

    render() {
        const {minuteStep, placeholder, defaultValue} = this.props;
        return (
            <AntTimePicker format={timeFormat}
                           defaultValue={defaultValue}
                           placeholder={placeholder}
                           minuteStep={minuteStep}/>
        )
    }
}


export default  DefaultTp;