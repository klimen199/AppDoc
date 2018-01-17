import React from 'react'
import PropTypes from 'prop-types'

import { Rate as AntRate} from 'antd'
import Icon from '../Icon'
import './styles.css'

const Rate = (props) => {
    //if (props.character)
    return(
        <AntRate {...props} character={props.character || <Icon type="star" size={props.starSize} svg/>}/>
    )
};

Rate.propTypes = {
    starSize: PropTypes.number,
    defaultValue: PropTypes.number,
    disabled: PropTypes.bool,
};

Rate.defaultProps = {
    starSize: 10,
    defaultValue: 0,
    disabled: false,
};

export default Rate;