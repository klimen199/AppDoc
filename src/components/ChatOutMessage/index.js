import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import './style.css'
import '../../icon/style.css'

class ChatOutMessage extends React.Component{
    render(){
        const { message, size, time, online, img, status, attached} = this.props;
        const rootClass = cn('message__out-item');


        return (
            <div className={rootClass}>
                <div className='message__out-area'>
                    <div className='message__out-time'>{time}</div>
                    <div className='message__out-box'>
                        <div className='message__out-text'>
                            {message}
                        </div>
                        <div className='message__out-attached'>
                            {attached}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ChatOutMessage.propTypes = {
    img: PropTypes.string,
    message: PropTypes.string,
    attached: PropTypes.string,
    status: PropTypes.oneOf(['extra', 'default', 'soon']),
    time: PropTypes.string,
};

ChatOutMessage.defaultProps = {
    img: '',
    message: '',
    attached: '',
    size: 'small',
    status: 'default',
    time: '00:00',
};

export default ChatOutMessage