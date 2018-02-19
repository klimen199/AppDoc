import React from 'react';
import moment from 'moment'

import {Form} from 'antd';
import TextArea from '../TextArea'
import Button from '../Button'
import Radio from '../Radio'
import Input from '../Input'
import Icon from '../Icon'
import DatePicker from '../DatePicker'
import TimePicker from '../TimePicker'

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

                <FormItem>
                    <Input addonBefore="ФИО" defaultValue={userName}/>
                </FormItem>

                <FormItem>
                     <DatePicker placeholder="Дата приёма" />
                     <TimePicker placeholder='Время приёма'/>
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
