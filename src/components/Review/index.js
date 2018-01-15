import React from 'react';
import PropTypes from 'prop-types'

import ProfileAvatar from '../ProfileAvatar'
import Rate from '../Rate'
import Button from '../Button'

import {dateToString} from '../../helpers/prepareDate'
import './style.css'
import '../../icon/style.css'

class Rewiew extends React.Component{

    render(){
        const {author, avatar, date, online, text, rate, treatmentDate, secondaryAllowed} = this.props;
        let treatment = `Обращение от ${treatmentDate}`;
        let time = dateToString(date);

        return (
            <div className='review'>
                <ProfileAvatar owner="patient" img={avatar} online={online} size='small'/>
                <div className="patient-info">
                    <div className="flex-row">
                        <div className="patient-name">{author}</div>
                        <div className="patient-time">{time}</div>
                        <Rate defaultValue={rate}/>
                    </div>
                    <div className="flex-row">
                       <div className="patient-text">{text}</div>
                    </div>
                    <Button
                        btnText={treatment}
                        size='go'
                        iconSize={16}
                        type='go'
                        icon='circle_arrow_right'
                        svg
                    />
                    {
                        secondaryAllowed && <Button/>
                    }
                </div>
            </div>
        )
    }
}

Rewiew.propTypes = {
    author: PropTypes.string,
    avatar: PropTypes.string,
    online: PropTypes.bool,
    text: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    treatmentDate: PropTypes.string,
    rate: PropTypes.number,


    secondaryAllowed: PropTypes.bool,
    secondary: PropTypes.bool,
};

Rewiew.defaultProps = {
    author: '',
    avatar: '',
    text: '',
    treatmentDate: '',
    rate: 0,

    secondaryAllowed: false,
};

export default Rewiew