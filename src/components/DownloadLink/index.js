import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import Icon from '../Icon'

import './style.css'
import '../../icon/style.css'

class DownloadLink extends React.Component {
    render() {

        const {type, size, href, btnText, icon, iconSize, svg, download, disable, onClick, conclusion} = this.props;
        const rootClass = cn('link', `link-size-${size}`, `link-type-${type}`, `${conclusion}`);

        return (
            <a href={href}
               className={rootClass}
               onClick={onClick}
               {...(disable ? {disabled: true} : {})}
               download={download}
            >
                {icon && (
                    <Icon svg={svg} type={icon} size={iconSize}/>
                )}
                {type !== 'icon' && <span>{btnText}</span>}
            </a>
        )
    }
}

DownloadLink.propTypes = {
    type: PropTypes.oneOf(['link']),
    size: PropTypes.oneOf(['small', 'default', 'large']),
    href: PropTypes.string,
    btnText: PropTypes.string,
    conclusion: PropTypes.string,
    icon: PropTypes.string,
    iconSize: PropTypes.number,
    svg: PropTypes.bool,
    download: PropTypes.bool,
    disable: PropTypes.bool,
    onClick: PropTypes.func,
};

DownloadLink.defaultProps = {
    type: 'link',
    size: 'default',
    href: '#',
    btnText: '',
    icon: '',
    iconSize: 20,
    svg: false,
    download: false,
    conclusion: '',
    disable: false,
    onClick: () => {
    },
};

export default DownloadLink