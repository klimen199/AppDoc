import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import Button from '../Button'
import Radio from '../Radio'
import ChatFiles from '../ChatFiles'
import ChatSend from '../ChatSend'
import ChatMessage from '../ChatMessage'

import './style.css'
import '../../icon/style.css'

class ChatVideoContent extends React.Component {

    render() {
        const dialogsClass = cn('chat-card-dialogs', {'chat-card-dialogs-active': this.props.isActive});

        return (

            <div className={dialogsClass}>
                <div className='chat-card-message__area'>
                    <div className='chat-card-video__box'></div>
                    <div className='chat-card-video__mini'></div>
                </div>
            </div>

        )
    }
}

ChatVideoContent.propTypes = {};

ChatVideoContent.defaultProps = {};

export default ChatVideoContent