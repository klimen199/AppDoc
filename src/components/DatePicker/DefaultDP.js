import React from 'react'

import {DatePicker as AntDatePicker} from 'antd'

const DefaultDP = (props) => {
    return (<AntDatePicker defaultValue={props.defaultValue}
                           format={props.format}
                           placeholder={'дата'}
                           className={props.className}/> )
};

export default DefaultDP;