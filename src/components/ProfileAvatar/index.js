import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import './styles.css'

class ProfileAvatar extends React.Component{

    render() {
        const {img, online, owner, size} = this.props;
        const back = 'url(' + img + ') center';

        const rootClass = cn('profileAvatar',`profileAvatar-status-${online}`, `profileAvatar-size-${size}`);
        const avatarClass = cn('profileImg', `profileAvatar-owner-${owner}`);
        const indicatorClass = cn(`profileAvatar-indicator`);

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
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    online: PropTypes.oneOf(['online', 'offline']),
    owner: PropTypes.oneOf(['patient','doctor']),
};

ProfileAvatar.defaultProps = {
    img: '',
    online: 'offline',
    owner: 'doctor',
    size: 'medium'
};

export default ProfileAvatar;