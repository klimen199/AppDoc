import React from 'react'
import PropTypes from 'prop-types'

import { Icon as AntdIcon } from 'antd'

import { getIcon, iconsList } from './IconsList'

const Icon = props => {
    const { svg, type, size, style, onClick } = props;

    if (!svg)
        return (<AntdIcon onClick={onClick} type={type} style={{fontSize:size}} />);

    return <span onClick={onClick}>{getIcon(type, size)}</span>
};

Icon.propTypes = {
    svg: PropTypes.bool,
    type: PropTypes.string.isRequired,
    size: PropTypes.number,
    style: PropTypes.object,
    onClick: PropTypes.func,
};

Icon.defaultProps = {
    svg: false,
    size: 36,
    style: {},
    onClick: () => {},
};

export default Icon
