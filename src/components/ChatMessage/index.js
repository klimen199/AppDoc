import React from 'react';
import PropTypes from 'prop-types'
import moment from 'moment'

import ProfileAvatar from '../ProfileAvatar'
import Hoc from "../Hoc"

import './style.css'
import '../../icon/style.css'

const ChatMessage = props => {

        const {text, size, date, online, img, isMy, isDate} = props;
        const rootClass = isMy ? 'message__out' : 'message__in';

        return (
            <Hoc>
                {
                    isDate ? 
                    ( <div className='message-today'>{moment(date*1000).format("D MMMM YYYY")}</div>) :
                (
                    <div className={`${rootClass}-item`}>
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
                )
                }
            
            </Hoc>
        )

}

ChatMessage.propTypes = {
    img: PropTypes.string,
    text: PropTypes.string,
    isMy: PropTypes.bool,
    date: PropTypes.number,
    isDate: PropTypes.bool,
};

ChatMessage.defaultProps = {
    img: '',
    text: '',
    isMy: false,
    size: 'small',
    date: 0,
    isDate: false,
};

export default ChatMessage