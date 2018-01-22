import React from 'react'
import {Col as AntCol} from 'antd'

const Col = (props) => {
    return (<AntCol span={(props.span * 2)} {...props}>{props.children}</AntCol>)
};

export default Col;