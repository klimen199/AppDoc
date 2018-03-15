import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import { Input, Upload } from 'antd';
import Button from '../Button'
import Hoc from '../Hoc'

import './style.css'
import '../../icon/style.css'

class ChatVideoPanel extends React.Component{
    render(){
        const {message, duration, isCalling, disable} = this.props;
        const rootClass = cn('message__panel');


        return (
            <div className={rootClass}>

                {isCalling ? 
                <Hoc>
                <div className="message__panel-duration">
                    {duration}
                </div>
                <div className="message__panel-btns">
                    <Button
                        btnText=''
                        size='small'
                        type='no-brd'
                        icon='clip'
                        iconSize={20}
                        title='Отключить микрофон'
                    />
                    <Button
                        btnText=''
                        size='small'
                        type='no-brd'
                        icon='end-call-button'
                        iconSize={9}
                        title='Завершить звонок'
                        onClick={this.props.onStop}
                    />
                </div>
                <div className="message__panel-full">
                    <Button
                        btnText=''
                        size='small'
                        type='no-brd'
                        icon='plus'
                        iconSize={16}
                    />
                    <Button
                        btnText=''
                        size='small'
                        type='no-brd'
                        icon='chat1'
                        iconSize={16}
                    />
                </div>
                </Hoc>
                : <div className="message__panel-btns">
                <Button
                        btnText=''
                        size='small'
                        type='no-brd'
                        icon='phone-call-outcoming'
                        iconSize={15}
                        title='Начать разговор'
                        onClick={this.props.onCall}
            />
            </div>
                }
            </div>
        )
    }
}

ChatVideoPanel.propTypes = {
    duration: PropTypes.string,
    disable: PropTypes.bool,
    isCalling: PropTypes.bool,
    onStop: PropTypes.func,
    onCall: PropTypes.func,
};

ChatVideoPanel.defaultProps = {
    duration: '',
    disable: true,
    isCalling: false,
    onStop: () => {},
    onCall: () => {},
};

export default ChatVideoPanel