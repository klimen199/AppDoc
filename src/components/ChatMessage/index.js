import React from 'react';
import PropTypes from 'prop-types'
import moment from 'moment'

import ProfileAvatar from '../ProfileAvatar'

import './style.css'
import '../../icon/style.css'

class ChatMessage extends React.Component {
    render() {
        const {message, size, time, online, img, isMy, isDate} = this.props;
        const rootClass = isMy ? 'message__out' : 'message__in';
        let dt = new Date();
        let monthes = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'Декабрь'];
        let month = monthes[dt.getMonth()+1];
        let day = dt.getDate();
        let year = dt.getFullYear();

        let content = isDate 
            ? <div className='message-today'>{day + ' ' + month + ' ' + year}</div>
            : <div className={`${rootClass}-item`}>
                {!isMy && <ProfileAvatar owner="patient"
                                         online={online}
                                         img={img}
                                         size={size}/>}
                <div className={`${rootClass}-area`}>
                    {
                        time && <div className={`${rootClass}-time`}>
                            {moment(time).format('HH:mm')}
                        </div>
                    }
                    <div className={`${rootClass}-box`}>
                        <div className={`${rootClass}-attached`}>
                            {message}
                        </div>
                    </div>
                </div>
            </div>

        return (
            <div>
            {content}
            </div>
        )
    }
}

ChatMessage.propTypes = {
    img: PropTypes.string,
    message: PropTypes.string,
    isMy: PropTypes.bool,
    isDate: PropTypes.bool,
    time: PropTypes.number,
};

ChatMessage.defaultProps = {
    img: '',
    message: '',
    isMy: false,
    isDate: false,
    size: 'small',
    time: null,
};

export default ChatMessage