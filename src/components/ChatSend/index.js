import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import { Input, Upload } from 'antd';
import Button from '../Button'

import './style.css'
import '../../icon/style.css'

class ChatSend extends React.Component{
    render(){
        const { TextArea } = Input;
        const {message, attachment} = this.props;
        const rootClass = cn('message__send');


        return (
            <div className={rootClass}>
                <div className='message__send-smileys'>
                    <Button
                        btnText=''
                        size='small'
                        type='no-brd'
                        icon='emoticon-face'
                    />
                </div>
                <div className='message__send-area'>
                    <TextArea placeholder="Ваше сообщение..." autosize />
                </div>
                <div className='message__send-btns'>
                    <Upload>
                        <Button
                                btnText=''
                                size='small'
                                type='no-brd'
                                icon='result'
                                title='Добавить заключение'
                                onClick={e => e.preventDefault()}
                            />
                    </Upload>
                    <Upload>
                        <Button
                            btnText=''
                            size='small'
                            type='no-brd'
                            icon='clip'
                            title='Прикрепить файл'
                            onClick={e => e.preventDefault()}
                        />
                    </Upload>
                    <Button
                        className='message__send-send'
                        btnText=''
                        title='Отправить сообщение'
                    />
                    <Button
                        btnText='завершить прием'
                        size='default'
                        type='yellow'
                    />
                </div>
            </div>
        )
    }
}

ChatSend.propTypes = {

    attachment: PropTypes.string,
};

ChatSend.defaultProps = {

    attachment: '',
};

export default ChatSend