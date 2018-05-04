import React from 'react'
import PropTypes from 'prop-types'

import ProfileAvatar from '../ProfileAvatar'
import RatePanel from '../RatePanel'
import './styles.css'

class DoctorProfileCard extends React.Component{
    
    shouldComponentUpdate(nextProps){
        return (this.props.timesRated !== nextProps.timesRated)
                    || (this.props.timesRated !== nextProps.timesRated)
                    || (this.props.img !== nextProps.img)
                    || (this.props.name !== nextProps.name)
                    || (this.props.isShort !== nextProps.isShort)
    }

    render(){
        const {img, short, name, specialty=[],online} = this.props;
        let spec = specialty.map(function(elem) {
            return elem.toUpperCase();
        });
        spec = spec.join(", ");

        const rootClass = short ? "doctorProfileCard-short" : "doctorProfileCard";

        return (
            <div className={rootClass}>
                <ProfileAvatar owner="doctor" {...this.props} short={short} size={(short ? 'medium' : 'large')}/>
                <div className={rootClass + '-name'}>{name}</div>
                <div className={rootClass + '-specialty'}>{spec}</div>
                <RatePanel {...this.props} disable={true}/>
            </div>
        )
    }
}

DoctorProfileCard.propTypes = {
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
