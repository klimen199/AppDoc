import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import Icon from '../Icon'

import './style.css'
import '../../icon/style.css'

class Button extends React.Component{

    render(){

        const {type, size, btnText, icon, iconSize, svg, disable, onClick} = this.props;

        const rootClass = cn( 'btn',`btn-size-${size}`, `btn-type-${type}`)
        let btnTextStyle = {}

        return (
            <button className={rootClass}
                    onClick={onClick}
                    {...(disable ? { disabled: true } : {})}
            >
                {icon && (
                    <Icon svg={svg} type={icon} size={iconSize}/>
                )}
                {type !== 'icon' && <span style={btnTextStyle}>{btnText}</span>}
            </button>
        )
    }
}

Button.propTypes ={
    type: PropTypes.oneOf(['blue','dark-blue','float','yellow','gradient','icon','light-blue', 'file', 'link']),
    size: PropTypes.oneOf(['small', 'default', 'large', 'icon', 'file', 'link']),
    btnText: PropTypes.string,
    icon: PropTypes.string,
    iconSize: PropTypes.number,
    svg: PropTypes.bool,
    disable: PropTypes.bool,
    onClick: PropTypes.func,
}

Button.defaultProps = {
    type: 'float',
    size: 'default',
    btnText: '',
    icon: '',
    iconSize: 20,
    svg: false,
    disable: false,
    onClick: () => {},
}

export default Button