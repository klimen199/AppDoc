import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import { Input, Upload } from 'antd';
import Button from '../Button'

import './style.css'
import '../../icon/style.css'

class ChatSend extends React.Component{

    sendHandler = () => {
        console.log(this.inp.textAreaRef.value)
        this.inp.textAreaRef.value = '';
        this.props.send({
            text: this.inp.textAreaRef.value,
            date: Math.floor(Date.now()/1000),
        })
    }

    componentDidMount(){
        this.inp.focus();
    }

    render(){
        const { TextArea } = Input;
        const {message, attachment, disable} = this.props;
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
                    <TextArea 
                        ref={inp => this.inp = inp}
                        onKeyPress = {e => {
                            if (e.key === 'Enter') {
                                this.sendHandler();
                            }
                        }}
                        placeholder="Ваше сообщение..." 
                        autosize />
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
                        onClick = {this.sendHandler}
                    />
                    <Button
                        btnText='завершить прием'
                        size='default'
                        type='yellow'
                        {...(disable ? { disabled: true } : {})}
                        onClick={this.props.closeVisit}
                    />
                </div>
            </div>
        )
    }
}

ChatSend.propTypes = {
    attachment: PropTypes.string,
    disable: PropTypes.bool,
    send: PropTypes.func,
    closeVisit: PropTypes.func,
};

ChatSend.defaultProps = {
    attachment: '',
    disable: true,
    send: () => {},
    closeVisit: () => {},
};

export default ChatSend