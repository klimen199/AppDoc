import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import Icon from '../Icon'

import './style.css'
import '../../icon/style.css'

class Link extends React.Component{
    render(){
        const {type, size, btnText, icon, iconSize, svg,download, disable, onClick, conclusion} = this.props;

        const rootClass = cn( 'link',`link-size-${size}`, `link-type-${type}` , `${conclusion}`)
        let btnTextStyle = {}

        return (
            <a href="" className={rootClass}
                    onClick={onClick}
                    {...(disable ? { disabled: true } : {})}
                    download={download}
            >
                {icon && (
                    <Icon svg={svg} type={icon} size={iconSize}/>
                )}
                {type !== 'icon' && <span style={btnTextStyle}>{btnText}</span>}
            </a>
        )
    }
}

Link.propTypes ={
    type: PropTypes.oneOf(['link']),
    size: PropTypes.oneOf(['small', 'default', 'large']),
    btnText: PropTypes.string,
    conclusion: PropTypes.string,
    icon: PropTypes.string,
    iconSize: PropTypes.number,
    svg: PropTypes.bool,
    download: PropTypes.bool,
    disable: PropTypes.bool,
    onClick: PropTypes.func,
}

Link.defaultProps = {
    type: 'link',
    size: 'default',
    conclusion: 'link-default',
    btnText: '',
    icon: '',
    iconSize: 20,
    svg: false,
    download: false,
    disable: false,
    onClick: () => {},
}

export default Link