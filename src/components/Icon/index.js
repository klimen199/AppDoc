import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { Icon as AntdIcon } from 'antd'

const Icon = props => {
    const { svg, type, size, num, onClick } = props;

    if (!svg)
        return (<AntdIcon onClick={onClick}
                          type={type}
                          style={{fontSize:size}} />);

    const clName = cn('icon', `icon-${type}`)

    return <span onClick={onClick}
                 className={clName}
                 num={num}
                 style={{fontSize:size}}/>
};

Icon.propTypes = {
    svg: PropTypes.bool,
    type: PropTypes.string.isRequired,
    size: PropTypes.number,
    num: PropTypes.number,
    onClick: PropTypes.func,
};

Icon.defaultProps = {
    svg: false,
    size: 36,
    num: '0',
    onClick: () => {},
};

export default Icon
