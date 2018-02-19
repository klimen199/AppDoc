import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'


import DownloadLink from '../DownloadLink'
import ProfileAvatar from '../ProfileAvatar'

import './style.css'
import '../../icon/style.css'

class ChatInMessage extends React.Component{
    render(){
        const { message, size, time, online, img, status, attached} = this.props;
        const rootClass = cn('message__in-item');


        return (
            <div className={rootClass}>
                <ProfileAvatar owner="patient" online={online} img={img} size={size}/>
                <div className='message__in-area'>
                    <div className='message__in-time'>{time}</div>
                    <div className='message__in-box'>
                        <div className='message__in-attached'>
                            {message}
                        </div>
                        <div className='message__in-attached'>
                            {attached}
                            <DownloadLink
                                btnText="Прикрепленный файл с длинным предлинным названием.doc"
                                size="default" 
                                type="link"
                                download
                                svg
                                icon="file"
                                iconSize={16}
                            />
                            <DownloadLink
                                btnText="Прикрепленный файл с длинным предлинным названием.doc"
                                size="default" 
                                type="link"
                                download
                                svg
                                icon="file"
                                iconSize={16}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ChatInMessage.propTypes = {
    img: PropTypes.string,
    message: PropTypes.string,
    attached: PropTypes.string,
    status: PropTypes.oneOf(['extra', 'default', 'soon']),
    time: PropTypes.string,
};

ChatInMessage.defaultProps = {
    img: '',
    message: '',
    attached: '',
    size: 'small',
    status: 'default',
    time: '00:00',
};

export default ChatInMessage