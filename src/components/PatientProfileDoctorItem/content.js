import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import Icon from '../Icon'
import './style.css'
import '../../icon/style.css'

class Content extends React.Component {
    render() {
        const { doctorExperience, doctorMaps } = this.props;

        return (
            <div className='profile__doctor-information'>  
                <div className='profile__doctor-information-block'>
                    <div className='profile__doctor-information-title'>Опыт работы</div>
                    <div className='profile__doctor-information-postitle'>Доктор принимает в клиниках:</div>
                    {doctorMaps.map((item, index)=> <a href='#' className='profile__doctor-information-text' key={index+1}>{item.map}</a>)}
                </div>
                <div className='profile__doctor-information-block'>
                    <div className='profile__doctor-information-title'>Образование</div>
                    <div className='profile__doctor-information-text'>Доктор принимает в клиниках:</div>
                    <ul className='profile__doctor-information-list'>
                        {doctorExperience.map((item, index)=> <li className='profile__doctor-information-text' key={index+1}>{item.experience}</li>)}
                    </ul>
                </div>
            </div>
        )
    }
}

Content.propTypes ={
    labName: PropTypes.string,
    doctorExperience: PropTypes.array,
    doctorMaps: PropTypes.array,
}

Content.defaultProps = {
    labName: '',
    doctorExperience: [],
    doctorMaps: [],
}

export default Content