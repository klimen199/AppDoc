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
        this.state = {
            time: null,
            message: '',
            currentTime: moment(),
            type: "chat"
        };
    };

    onChangeTime = (start) => {
        let paramDate = moment(+this.state.currentTime.format('x'));
        let type;
        let area = this.props.availableArea;
        paramDate.hour(start._d.getHours());
        paramDate.minute(start._d.getMinutes());
        paramDate.second(0);

        for(let i = 0; i<area.length; i++) {
            if(paramDate.hour()>=area[i].from.hour() && paramDate.hour()<=area[i].to.hour()) {
                type = area[i].type;
            }
        }

        this.setState({
            currentTime: paramDate,
            type: type
        });
    };

    onChangeDate = (date) => {
        let paramDate = moment(+this.state.currentTime.format('x'));

        const bufHours = paramDate._d.getHours();   
        const bufMinutes = paramDate._d.getMinutes();

        paramDate = date;
        paramDate.hour(bufHours);
        paramDate.minute(bufMinutes);
        paramDate.second(0);
        this.setState({
            currentTime: paramDate,
        });
        this.props.onChangeDate();
    };

    getIconsFromType = (type) => {
        let icons;
        switch (type) {
            case "chat":
                icons = <Radio icons={['chat1']}/>;
                break;
            case "voice":
                icons = <Radio icons={['chat1','telephone']}/>;
                break;
            case "video":
                icons = <Radio icons={['chat1','telephone', "video-camera"]}/>;
                break;
            default:
                icons = <Radio icons={['chat1']}/>;
        }
        return icons;
    };

    componentWillReceiveProps(nextProps){
        nextProps.visible === false ? (this.setState({message: ''}), this.props.form.resetFields()) : null;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {    
                let paramDate = this.state.currentTime;
                let response = {
                    id: this.props.id,
                    comment: this.state.message,
                    date: +paramDate.format('X'), //формат для сервера
                    type: values.radio ,
                };
                this.props.onSave(response);
            } else { console.log(err, "ERROR")}
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
                                        availableArea={this.props.availableArea}
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
                        this.getIconsFromType(this.state.type)
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
