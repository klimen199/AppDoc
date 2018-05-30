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
    constructor(props) {
        super(props);
        this.currentTime = moment(0);
        this.state = {
            time: null,
            message: '',
            chooseTime: null,
        };
    };

    onChangeTime = (start, value) => {
  
        this.currentTime.hour(start._d.getHours());
        this.currentTime.minute(start._d.getMinutes());
        this.currentTime.second(0);
        let a = moment( +start.format('x'));
       
        console.log("currentTime", this.currentTime.format('MMMM Do YYYY, h:mm:ss a'));
        //this.props.onChangeTime(this.currentTime.format('x')); // передать наверх
    };

    onChangeDate = (date) => {
        const bufHours = this.currentTime._d.getHours();   
        const bufMinutes = this.currentTime._d.getMinutes();   

        this.currentTime = date;
        this.currentTime.hour(bufHours);
        this.currentTime.minute(bufMinutes);
        this.currentTime.second(0);

        console.log("currentTime", this.currentTime.format('MMMM Do YYYY, h:mm:ss a'));
        //this.props.onChangeDate(start[1].format('x'));
    };

    componentWillReceiveProps(nextProps){
        nextProps.visible == false ? (this.setState({message: ''}), this.props.form.resetFields()) : null;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                let date = values.day.format("DD:MM:YYYY") + " " 
                        + values.time[1].format("HH:mm");
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
                            <DatePicker placeholder="Дата приёма"
                                        onChange={this.onChangeDate} />
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
                                                from : 1395985227000,
                                                to   : 1395990227000
                                            },
                                            {
                                                from : 1396005227000,
                                                to   : 1396010327000
                                            },
                                            {
                                                from : 1396020027000,
                                                to   : 1396025327000
                                            }
                                        ]}
                                        placeholder='Время приёма' 
                                        onChange={this.onChangeTime}/>
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
