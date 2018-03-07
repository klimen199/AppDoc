import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import { Input, Upload } from 'antd';
import Button from '../Button'

import './style.css'
import '../../icon/style.css'

class ChatVideoPanel extends React.Component{
    
    render(){
        const {message, duration, disable, onStop} = this.props;
        const rootClass = cn('message__panel');

        return (
            <div className={rootClass}>
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
                            onClick={onStop}
                            btnText=''
                            size='small'
                            type='no-brd'
                            icon='end-call-button'
                            iconSize={9}
                            title='Завершить звонок'
                        /> 
                </div>
                <div className="message__panel-full">
                    <Button
                        btnText=''
                        size='small'
                        type='no-brd'
                        icon='plus'
                        iconSize={16}
                        title='Загрузить файл'
                    />
                    <Button
                        btnText=''
                        size='small'
                        type='no-brd'
                        icon='chat1'
                        iconSize={16}
                    />
                </div>
            </div>
        )
    }
}

ChatVideoPanel.propTypes = {
    duration: PropTypes.string,
    disable: PropTypes.bool,
};

ChatVideoPanel.defaultProps = {
    duration: '',
    disable: true,
};

export default ChatVideoPanel