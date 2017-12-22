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
        const isEmpty = !props.defaultValue;

        this.state = {
            isOpen: false,
            isEmpty,
        }
    }

    dpOnChange = (e) =>{
        const isEmpty = !e;
        this.setState({isOpen:false, isEmpty});

    }

    render(){

        const {defaultValue, range} = this.props;

        const dpStyle = this.state.isEmpty ? {display:'none'} : {display:'inline-block'} ;


        return (
            <div onFocus={() => this.setState({isOpen:true})}
                 onBlur={() => this.setState({isOpen:false})}
                 className="datepicker-base">

                <Icon type="calendar"
                      onClick={()=>this.setState({isOpen: (!this.state.isOpen)})}/>
                {range ? (
                    <RangePicker defaultValue={defaultValue}
                                 format={dateFormat}
                                 />
                    ) : (
                        <AntDatePicker open={this.state.isOpen}
                                       onChange={this.dpOnChange}
                                       defaultValue={defaultValue}
                                       format={dateFormat}
                                       style={dpStyle}/>
                    )
                }
            </div>
        )
    }
}

DatePicker.propTypes = {
    defaultValue: PropTypes.object,
    range: PropTypes.bool,
};

DatePicker.defaultProps = {
    defaultValue: null,
    range: false,
};

export default  DatePicker;