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
    state = {
        time: null,
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
              
                let date = values.day.format("DD:MM:YYYY") + " " 
                        + values.time.format("HH:mm");
                const dateMoment = moment(date, "DD:MM:YYYY HH:mm");        

                let response = {
                    name: values.name,
                    message: this.ta.state.value,
                    date: moment(date, "DD:MM:YYYY HH:mm").unix()*1000,
                    type: values.radio ,
                };
                this.props.onSave(response);

            }
          });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        const {visible, date, time, userName, defaultDate} = this.props;

        return (
            <Form onSubmit={this.handleSubmit}
                  className="NewVisitModal">

                <FormItem>
                    {getFieldDecorator('name',{
                        initialValue: userName,
                        rules: [{
                            required: true, message: 'Ввведите имя',
                        }],
                    })(
                        <Input addonBefore="ФИО"/>
                    )}
                </FormItem>

                <FormItem>
                    {getFieldDecorator('day', {
                        initialValue: moment(defaultDate),
                        rules: [{
                            required: true, message: 'Введите дату',
                        }],
                    })(
                        <DatePicker placeholder="Дата приёма"/>
                    )}
                    {getFieldDecorator('time',{
                        rules: [{
                            required: true, message: 'Введите время',
                        }],
                    })(
                        <TimePicker placeholder='Время приёма' 
                                    onChange={time => this.setState({time})}/>
                    )}
                </FormItem>

                <TextArea label='Комментарий к приему'
                          ref={ta => this.ta = ta}
                          className="NewVisitModal-txtarea"/>

                <FormItem>
                    {getFieldDecorator('radio',{
                        initialValue: 'chat1',
                    })(
                        <Radio icons={['chat1','telephone', "video-camera"]}/>
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
