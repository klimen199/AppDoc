import React from 'react'
import {DatePicker as AntDatePicker} from 'antd'
import propTypes from 'prop-types'
import cn from 'classnames'

import {Icon} from 'antd'

import './styles.css'

class DatePicker extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
        }
    }


    render(){



        return (
            <div onFocus={() => this.setState({isOpen:true})}
                 onBlur={() => this.setState({isOpen:false})}>

                <Icon type="calendar"
                      onClick={()=>this.setState({isOpen: (!this.state.isOpen)})}
                      style={{position:'relative',zIndex: 999,}}/>
                <AntDatePicker open={this.state.isOpen}
                               onChange={()=>this.setState({isOpen:false})}/>

            </div>
        )
    }
}

DatePicker.propTypes = {};

DatePicker.defaultProps = {};

export default  DatePicker;