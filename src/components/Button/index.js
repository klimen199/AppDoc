import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import {Icon} from 'antd'

import './style.css'

class Button extends React.Component{

    render(){

        const {type, size, btnText, icon, disable, onClick} = this.props;

        const rootClass = cn(`btn-size-${size}`, `btn-type-${type}`)
        let btnTextStyle = {}

        return (
            <button className={rootClass}
                    onClick={onClick}
                    {...(disable ? { disabled: true } : {})}
            >
                {icon && (
                    <Icon type={icon} />
                )}
                {type !== 'icon' && <span style={btnTextStyle}>{btnText}</span>}
            </button>
        )
    }
}

Button.propTypes ={
    type: PropTypes.oneOf(['default', 'primary','icon']),
    size: PropTypes.oneOf(['small', 'default', 'large']),
    btnText: PropTypes.string,
    icon: PropTypes.string,
    disable: PropTypes.bool,
    onClick: PropTypes.func,
}

Button.defaultProps = {
    type: 'default',
    size: 'default',
    btnText: '',
    icon: '',
    disable: false,
    onClick: () => {},
}

export default Button