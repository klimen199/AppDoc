import React from 'react'
import PropTypes from 'prop-types'

import { Radio as AntRadio } from 'antd';
const RadioButton = AntRadio.Button;
const RadioGroup = AntRadio.Group;
import Icon from '../Icon'

import './styles.css'


class Radio extends React.Component{

    renderRadio = (icons) => {
        let radios = [];

        icons.map((icon,index) => {
            radios.push(<RadioButton value={icon} key={'radio'+icon+index}>
                <Icon svg size={16} type={icon}/>
            </RadioButton>)
        })

        return radios;
    };

    render(){

        return (
            <RadioGroup>
                {this.renderRadio(this.props.icons)}
            </RadioGroup>
        )

    }
}

Radio.propTypes ={
    icons: PropTypes.arrayOf(PropTypes.string),
};

Radio.defaultProps = {
    icons: [],
};

export default Radio;
