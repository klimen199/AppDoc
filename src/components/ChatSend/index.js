import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import { Input, Upload } from 'antd';
import Button from '../Button'

import {previewFile} from '../../helpers/modifyFiles'

import './style.css'
import '../../icon/style.css'

class ChatSend extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: props.value,
            fileList: [],
            generatedList: [],
            isGenerated: true,
            conclusionList: [],
        }
    }

    modifyFiles = (fileList, isConclusion) => {
        console.log('in mpdify')
        let that = this;
        fileList.map(file => {
            previewFile(file.originFileObj, function (previewDataUrl) {
                file.thumbUrl = previewDataUrl;
                console.log('reerere');
                that.setState((prev) => {
                    return {
                        ...prev,
                        isGenerated: fileList.length == prev.generatedList.length + 1,
                        generatedList:[...prev.generatedList, file],
                    }
                });
                console.log(fileList.length, that.state.generatedList.length + 1)
                if (fileList.length == that.state.generatedList.length + 1){
                    console.log('eeeeeee')
                    that.pushFiles([...that.state.generatedList, file], isConclusion);
                }
            });
        })
    }
    
    uploadFiles = (e, isConclusion) => {
        //this.setState({isGenerated: false})
        isConclusion 
            ? this.setState(state => {return {
                conclusionList:[...state.conclusionList, e.file], 
            }})
            : this.setState(state => {return {
                fileList:[...state.fileList, e.file]
            }})

        
    }

    pushFiles = (files, isConclusion) => {
        
            console.log('[push]')
            isConclusion ? 
                (
                    this.props.uploadConclusion(this.modifyFiles(files, isConclusion)),
                    this.setState({conclusionList: []})
            ) : (
                this.props.uploadFiles(this.modifyFiles(files, isConclusion)),
                this.setState({fileList: []})
            );
        
    }

    sendHandler = () => {        
        this.inp.focus();
        this.props.send({
            text: this.state.value,
            date: Math.floor(Date.now()/1000),
        });
        this.setState({value: ''});
    }

    componentDidMount(){
        this.inp.focus();
    }

    render(){
        const { TextArea } = Input;
        const {message, attachment, disable} = this.props;
        const rootClass = cn('message__send');

        this.state.isGenerated ? 
                console.log('rendered') : console.log('not rendered');

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
                        value = {this.state.value}
                        onChange = { e => {
                            e.target.value.charCodeAt(e.target.value.length - 1) === 10 
                                ? (!disable && this.sendHandler())
                                : this.setState({value: e.target.value})
                        }}
                        placeholder="Ваше сообщение..." 
                        autosize />
                </div>
                <div className='message__send-btns'>
                    <Upload multiple={true}
                        showUploadList={false}
                        fileList={this.state.conclusionList}
                        onChange = {(e) => this.uploadFiles(e,true)}>
                        <Button
                                btnText=''
                                size='small'
                                type='no-brd'
                                icon='result'
                                title='Добавить заключение'
                                onClick={e => e.preventDefault()}
                            />
                    </Upload>
                    <Upload
                        multiple={true}
                        showUploadList={false}
                        fileList={this.state.fileList}
                        onChange = {(e) => this.uploadFiles(e)}>
                        <Button
                            btnText=''
                            size='small'
                            type='no-brd'
                            icon='clip'
                            title='Прикрепить файл'
                        />
                    </Upload>
                    <Button
                        className='message__send-send'
                        btnText=''
                        title='Отправить сообщение'
                        disable = {disable}
                        onClick = {this.sendHandler}
                    />
                    <Button
                        btnText='завершить прием'
                        size='default'
                        type='yellow'
                        disable = {disable}
                        onClick={this.props.closeVisit}
                    />
                </div>
            </div>
        )
    }
}

ChatSend.propTypes = {
    value: PropTypes.string,
    attachment: PropTypes.string,
    disable: PropTypes.bool,
    send: PropTypes.func,
    closeVisit: PropTypes.func,
};

ChatSend.defaultProps = {
    value: '',
    attachment: '',
    disable: true,
    send: () => {},
    closeVisit: () => {},
};

export default ChatSend