import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import ProfileAvatar from '../ProfileAvatar'
import RatePanel from '../RatePanel'
import Button from '../Button'

import './style.css'
import '../../icon/style.css'

class Rewiew extends React.Component{

    render(){
         const {img, short, name, rewText, size, online, time, unit} = this.props;
        const rootClass = cn('rewiew');

        return (
            <div className={rootClass}>
                <ProfileAvatar owner="patient" online={online} img={img} size={size}/>
                <div className="patient-info">
                    <div className="flex-row">
                        <div className="patient-name">{name}</div>
                        <div className="patient-time">{time} {unit} назад</div>
                        <RatePanel {...this.props}/>
                    </div>
                    <div className="flex-row">
                       <div className="patient-text">{rewText}</div>
                    </div>
                    <Button
                        btnText='Обращение от 13.09.2017'
                        size='go'
                        type='go'
                        icon='circle_arrow_right'
                        svg
                    />
                </div>
            </div>
        )
    }
}

Rewiew.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    rewText: PropTypes.string,
    time: PropTypes.number,
    unit: PropTypes.oneOf(['мин.', 'час', 'день', 'месяц']),
    specialty: PropTypes.string,
    rateValue: PropTypes.number,
    timesRated: PropTypes.number,
};

Rewiew.defaultProps = {
    img: '',
    name: 'Валера',
    size: 'small',
    rewText: '',
    time: '1',
    unit: 'мин.'
};

export default Rewiew