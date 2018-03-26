import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Input, Upload } from 'antd';
import Button from '../Button'

import './style.css'
import '../../icon/style.css'
const { transliter } = require('transliter');

class ChatSend extends React.Component{
    handleChange = ({fileList}) => {
        let list =  fileList;
        try{
            let {name} = list[list.length - 1];
            list[list.length-1].name = transliter(name);
        }
        catch (e){
            this.setState({fileList});
            this.props.onChange({fileList});
            return;
        }
        this.setState({fileList:list});
        //this.props.onChange({fileList:list}) generate error
    };

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
                    <TextArea placeholder="Ваше сообщение..." autosize />
                </div>
                <div className='message__send-btns'>
                    <Upload onChange={this.handleChange}>
                        <Button
                                btnText=''
                                size='small'
                                type='no-brd'
                                icon='result'
                                title='Добавить заключение'
                                onClick={e => e.preventDefault()}
                            />
                    </Upload>
                    <Upload onChange={this.handleChange}>
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
                        {...(disable ? { disabled: true } : {})}
                        disable
                    />
                </div>
            </div>
        )
    }
}

ChatSend.propTypes = {
    attachment: PropTypes.string,
    disable: PropTypes.bool,
};

ChatSend.defaultProps = {
    attachment: '',
    disable: true,
};

export default ChatSend