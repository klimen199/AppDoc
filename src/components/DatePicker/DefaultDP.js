import React from 'react'

import {DatePicker as AntDatePicker} from 'antd'

const DefaultDP = (props) => {
    return (<AntDatePicker defaultValue={props.defaultValue}
                           format={props.format}
                           placeholder={'дата'}
                           onChange={props.onChange}
                           className={props.className}/> )
};

export default DefaultDP;