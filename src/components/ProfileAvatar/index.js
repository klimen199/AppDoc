import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

class ProfileAvatar extends React.Component{

    render() {
        const {img, online, owner} = this.props;
        const back = 'url(' + img + ') center';

        const live = online ? "-online" : "";
        const rootClass = owner === 'doctor' ? 'profileAvatar-root doctorAvatarBorder'+live : 'profileAvatar-root',
            avatarClass = "profileAvatar-" + owner;
        const indicatorClass = "profileAvatar-indicator"+live;

        return(
            <div className={rootClass}>
                <div className={avatarClass} style={{background: back,backgroundSize: 'cover',}}>
                    <div className={indicatorClass}></div>
                </div>
            </div>

        )
    }
}

ProfileAvatar.propTypes = {
    img: PropTypes.string,
    online: PropTypes.bool,
    owner: PropTypes.oneOf(['patient','doctor']).isRequired,
};

ProfileAvatar.defaultProps = {
    img: '',
    online: false,
    owner: '',
};

export default ProfileAvatar;