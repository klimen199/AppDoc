import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { Icon as AntdIcon } from 'antd'

const Icon = props => {
    const { svg, type, size, onClick } = props;

    if (!svg)
        return (<AntdIcon onClick={onClick}
                          type={type}
                          style={{fontSize:size}} />);

    const clName = cn('icon', `icon-${type}`)

    return <span onClick={onClick}
                 className={clName}
                 style={{fontSize:size}}/>
};

Icon.propTypes = {
    svg: PropTypes.bool,
    type: PropTypes.string.isRequired,
    size: PropTypes.number,
    onClick: PropTypes.func,
};

Icon.defaultProps = {
    svg: false,
    size: 36,
    onClick: () => {},
};

export default Icon
