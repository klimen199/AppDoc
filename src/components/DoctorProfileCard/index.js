import React from 'react'
import PropTypes from 'prop-types'

import ProfileAvatar from '../ProfileAvatar'
import RatePanel from '../RatePanel'
import './styles.css'

class DoctorProfileCard extends React.Component{

    shouldComponentUpdate(nextProps){
        return this.props.short !== nextProps.short;
    }

    render(){
        const {img, short, name, specialty,online} = this.props;
        const spec = specialty.toUpperCase();

        const rootClass = short ? "doctorProfileCard-short" : "doctorProfileCard";

        return (
            <div className={rootClass}>
                <ProfileAvatar owner="doctor" online={online} img={img} short={short} size={(short ? 'medium' : 'large')}/>
                <div className={rootClass + '-name'}>{name}</div>
                <div className={rootClass + '-specialty'}>{spec}</div>
                <RatePanel {...this.props}/>
            </div>
        )
    }
}

DoctorProfileCard.propTypes = {
    img: PropTypes.string,
    online: PropTypes.oneOf(['online', 'offline']),
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