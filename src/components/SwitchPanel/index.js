import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import './styles.css'

import Switch from '../Switch'
import {Icon} from 'antd'

class SwitchPanel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isChecked: props.defaultChecked,
        };
    }

    render(){
        const {icon, title, disabled, defaultChecked} = this.props;
        console.log('isChecked', this.state.isChecked)
        const icColor = this.state.isChecked ? '#ef5350' : '#d3d3d3';
        console.log('color', icColor)

        const icStyle = {
            fontSize: 19,
            color: icColor,
        }

        return (
            <div>
                {icon && (<Icon type={icon} style={icStyle}/>)}
                <span className="switchPanel-title">{title}</span>
                <Switch defaultChecked={defaultChecked}
                        disabled = {disabled}
                        onChange={(e) => this.setState({isChecked:e})}/>
            </div>
        )
    }
}

SwitchPanel.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
}

SwitchPanel.defaultProps = {
    icon: '',
    title: '',
    defaultChecked: false,
    disabled: false,
}

export default SwitchPanel;