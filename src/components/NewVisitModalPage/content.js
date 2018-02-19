import React from 'react';
import moment from 'moment'

import {Form} from 'antd';
import TextArea from '../TextArea'
import Button from '../Button'
import Radio from '../Radio'
import Input from '../Input'
import Icon from '../Icon'

const FormItem = Form.Item;

class ContentForm extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        let response = {
            ...this.props.form.getFieldsValue(),
            message: this.ta.state.value,
            date: this.props.date,
        };
        this.props.onSave(response);
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        const {visible, date, time, userName} = this.props;

        return (
            <Form onSubmit={this.handleSubmit}
                  className="NewVisitModal">

                <div className='modal-row'>
                    <div className='modal-data'>
                        <Icon svg type='calendar' size={26}/>
                        <div className='modal-result'>{moment(date).format('DD MMMM')}</div>
                    </div>
                    <div className='modal-time'>
                        <Icon svg type='alarm' size={26}/>
                        <div className='modal-result'>{moment(date).format('HH:mm')}</div>
                    </div>
                </div>

                <FormItem>
                    <Input addonBefore="ФИО" defaultValue={userName}/>
                </FormItem>

                <TextArea label='Комментарий к приему'
                          ref={ta => this.ta = ta}
                          className="NewVisitModal-txtarea"/>

                <FormItem>
                    {getFieldDecorator('radio')(
                        <Radio icons={['telephone', "video-camera", 'chat1']}/>
                    )}
                </FormItem>

                <Button size='default'
                        btnText='Сохранить'
                        htmlType="submit"
                        type='float'/>
            </Form>
        )
    }
}

const Content = Form.create()(ContentForm);

export default Content
