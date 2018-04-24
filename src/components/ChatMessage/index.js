import React from 'react';
import PropTypes from 'prop-types'
import moment from 'moment'

import ProfileAvatar from '../ProfileAvatar'

import './style.css'
import '../../icon/style.css'

class ChatMessage extends React.Component {
    render() {
        const {text, size, date, online, img, isMy} = this.props;
        const rootClass = isMy ? 'message__out' : 'message__in';

        return (
            <div className={`${rootClass}-item`}>
                {!isMy && <ProfileAvatar owner="patient"
                                         online={online}
                                         img={img}
                                         size={size}/>}
                <div className={`${rootClass}-area`}>
                    {
                        date && <div className={`${rootClass}-time`}>
                            {moment(date).format('HH:mm')}
                        </div>
                    }
                    <div className={`${rootClass}-box`}>
                        <div className={`${rootClass}-attached`}>
                            {text}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ChatMessage.propTypes = {
    img: PropTypes.string,
    text: PropTypes.string,
    isMy: PropTypes.bool,
    date: PropTypes.number,
};

ChatMessage.defaultProps = {
    img: '',
    text: '',
    isMy: false,
    size: 'small',
    date: 0,
};

export default ChatMessage