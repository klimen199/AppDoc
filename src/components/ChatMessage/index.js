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
                        date && <div className={`${rootClass}-time`}>
                            {moment(date*1000).format('HH:mm')}
                        </div>
                    }
                    <div className={`${rootClass}-box`}>
                        <div className={`${rootClass}-attached`}>
                            {text}
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
    text: PropTypes.string,
    isMy: PropTypes.bool,
    isDate: PropTypes.bool,
    time: PropTypes.number,
    date: PropTypes.number,
};

ChatMessage.defaultProps = {
    img: '',
    text: '',
    isMy: false,
    isDate: false,
    size: 'small',
    date: 0,
};

export default ChatMessage