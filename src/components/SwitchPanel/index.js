import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

import Switch from '../Switch'
import Icon from '../Icon'

class SwitchPanel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isChecked: props.defaultChecked,
        };
    }

    render(){
        const {icon, title, disabled, defaultChecked} = this.props;
        const rootClass = this.state.isChecked ? 'switch-panel switch-panel-checked' : 'switch-panel';

        return (
            <div className={rootClass}>
                {icon && (<Icon type={icon} />)}
                <span className="switch-panel-title">{title}</span>
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