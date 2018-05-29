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
        message: '',
    }

    onChangeTime = (start, value) => {
        console.log("time", start[1].format('x'));
        //this.props.onChangeTime(start[1].format('x'));
    };

    onChangeDate = (date) => {
        console.log("date", date.format('x'));
        //this.props.onChangeTime(start[1].format('x'));
    };

    componentWillReceiveProps(nextProps){
        nextProps.visible == false ? (this.setState({message: ''}), this.props.form.resetFields()) : null;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
              
                let date = values.day.format("DD:MM:YYYY") + " " 
                        + values.time.format("HH:mm");
                const dateMoment = moment(date, "DD:MM:YYYY HH:mm");        

                let response = {
                    id: this.props.id,
                    comment: this.state.message,
                    date: moment(date, "DD:MM:YYYY HH:mm").unix(),
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
                <Input addonBefore="ФИО" value={userName} readOnly/>

                <div className='flex-row'>
                    <FormItem>
                        {getFieldDecorator('day', {
                            rules: [{required: true, message: 'Введите дату',}],
                        })(
                            <DatePicker placeholder="Дата приёма"/>
                        )}
                    </FormItem>
                    
                    <FormItem>
                        {getFieldDecorator('time',{
                            rules: [{required: true, message: 'Введите время',}],
                        })(
                            <TimePicker format="HH:mm"
                                        minuteStep={5}
                                        availableArea={[
                                            {
                                                from : 1000000,
                                                to   : 2000000
                                            }
                                        ]}
                                        placeholder='Время приёма' 
                                        onChange={time => this.setState({time})}/>
                        )}
                    </FormItem>
                </div>

                <TextArea label='Комментарий к приему'
                          value={this.state.message}
                          onChange={message => this.setState({message})}
                          className="NewVisitModal-txtarea"/>

                <FormItem>
                    {getFieldDecorator('radio',{
                        initialValue: 'chat',
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
