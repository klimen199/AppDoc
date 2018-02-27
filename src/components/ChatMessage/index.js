import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'


import DownloadLink from '../DownloadLink'
import ProfileAvatar from '../ProfileAvatar'

import './style.css'
import '../../icon/style.css'

class ChatMessage extends React.Component{
    render(){
        const { message, size, time, online, img, status, attached, isMy} = this.props;
        let rootClass;

        if (isMy == true) {
            rootClass = cn('message__out');
        } else {
            rootClass = cn('message__in');
        }

        const itemClass = cn(`${rootClass}-item`);
        const areaClass = cn(`${rootClass}-area`);
        const timeClass = cn(`${rootClass}-time`);
        const boxClass = cn(`${rootClass}-box`);
        const attachedClass = cn(`${rootClass}-attached`);

        return (
            <div className={itemClass}>
                {!isMy && <ProfileAvatar owner="patient" online={online} img={img} size={size}/>}
                <div className={areaClass}>
                    <div className={timeClass}>{time}</div>
                    <div className={boxClass}>
                        <div className={attachedClass}>
                            {message}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ChatMessage.propTypes = {
    img: PropTypes.string,
    message: PropTypes.string,
    attached: PropTypes.string,
    isMy: PropTypes.bool,
    status: PropTypes.oneOf(['extra', 'default', 'soon']),
    time: PropTypes.string,
};

ChatMessage.defaultProps = {
    img: '',
    message: '',
    attached: '',
    isMy: false,
    size: 'small',
    status: 'default',
    time: '00:00',
};

export default ChatMessage