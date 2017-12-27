import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import { Icon } from 'antd';

import './style.css'

class ArrowGroup extends React.Component{

    render(){

        const {type, disable, onClick} = this.props;

        const rootClass = cn( 'arrow', `arrow-type-${type}`,)
        let btnTextStyle = {}

        return (
            <div className='arrowsGroup'>
                <button className={rootClass}
                    onClick={onClick}
                    {...(disable ? { disabled: true } : {})}
                >
                    <Icon type='left' />
                    {type !== 'icon'}
                </button>
                <button className={rootClass}
                    onClick={onClick}
                    {...(disable ? { disabled: true } : {})}
                >
                    <Icon type='right' />
                    {type !== 'icon'}
                </button>
            </div>
        )
    }
}

ArrowGroup.propTypes ={
    type: PropTypes.oneOf(['blue','dark-blue','float','yellow','gradient']),
    disable: PropTypes.bool,
    onClick: PropTypes.func,
}

ArrowGroup.defaultProps = {
    type: 'float',
    disable: false,
    onClick: () => {},
}

export default ArrowGroup