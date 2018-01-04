import React from 'react'
import PropTypes from 'prop-types'

import ProfileAvatar from '../ProfileAvatar'
import RatePanel from '../RatePanel'
import './styles.css'

class DoctorProfileCard extends React.Component{

    render(){
        const {img, short, name, specialty} = this.props;
        const spec = specialty.toUpperCase();

        const rootClass = short ? "doctorProfileCard-short" : "doctorProfileCard";

        return (
            <div className={rootClass}>
                <ProfileAvatar owner="doctor" online img={img} short={short}/>
                <div className={rootClass + '-name'}>{name}</div>
                <div className={rootClass + '-specialty'}>{spec}</div>
                <RatePanel {...this.props}/>
            </div>
        )
    }
}

DoctorProfileCard.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    specialty: PropTypes.string,
    short: PropTypes.bool,
    rateValue: PropTypes.number,
    timesRated: PropTypes.number,
};

DoctorProfileCard.defaultProps = {
    img: '',
    name: '',
    specialty: '',
    short: false,
};

export default DoctorProfileCard;