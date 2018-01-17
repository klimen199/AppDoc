import React from 'react'

import Icon from '../Icon'
import {DatePicker} from 'antd'
const { RangePicker } = DatePicker;

class SmallRP extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            values: [],
        }
    }

    RPHandler = (values) => {
        this.setState({values});
        this.props.onChange(values);
    };

    render() {
        return (
            <div style={this.props.style}>
                <Icon type="calendar" svg size={19}/>
                <div className={this.props.className}>
                    <RangePicker format={this.props.format}
                                 onChange={this.RPHandler}
                                 value={this.state.values}
                                 allowClear={false}/>
                </div>
                <Icon type="circle_close" svg size={15}
                      onClick={() => this.RPHandler([])}/>
            </div>
        )
    }
}

export default SmallRP;