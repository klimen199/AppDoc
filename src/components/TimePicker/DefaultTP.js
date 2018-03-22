import React from 'react'

import {TimePicker  as AntTimePicker} from 'antd'

const timeFormat = 'HH:mm';

class DefaultTp extends React.Component {

    render() {
        const {minuteStep, placeholder, defaultValue,onChange} = this.props;
        return (
            <AntTimePicker format={timeFormat}
                            onChange={onChange}
                           defaultValue={defaultValue}
                           placeholder={placeholder}
                           minuteStep={minuteStep}
                           {...this.props}/>
        )
    }
}


export default  DefaultTp;