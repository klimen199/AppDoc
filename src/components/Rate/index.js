import React from 'react'
import PropTypes from 'prop-types'

import { Rate as AntRate} from 'antd'
import Icon from '../Icon'
import './styles.css'

class Rate extends React.Component{
    //if (props.character)
    shouldComponentUpdate(nextProps){
        return true;
    }

    render(){
        return(
            <AntRate {...this.props} 
                    character={this.props.character 
                        || <Icon type="star" 
                                    size={this.props.starSize} 
                                    svg/>}/>
        )
    }
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