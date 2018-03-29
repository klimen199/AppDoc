import React from 'react';
import moment from 'moment'

import {Form} from 'antd';
import TextArea from '../TextArea'
import Button from '../Button'
import Radio from '../Radio'
import Select from '../Select'
import Icon from '../Icon'

const FormItem = Form.Item;

class ContentForm extends React.Component {
    state = {
        message: '',
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let response = {
            ...this.props.form.getFieldsValue(),
            comment: this.state.message,
            date: (this.props.date).getTime(),
        };
        this.props.onSave(response);
    };

    componentWillReceiveProps(nextProps){
        nextProps.visible == false ? (
            this.setState({message: ''}),
            this.props.form.resetFields()
        ) : null;
    }



    renderOptions = () => {
        return this.props.patients.map((patient, i) => {
            return (
                <Select.Option value={patient.id}
                               key={`my_patient_${i}`}>
                    {patient.name}</Select.Option>)
        })
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        const {visible, date, time} = this.props;

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
                    {getFieldDecorator('id_user')(
                        <Select placeholder="ФИО">
                            {this.renderOptions()}
                        </Select>
                    )}
                </FormItem>

                
                <TextArea label='Комментарий к приему' 
                            value={this.state.message}
                            onChange={message => this.setState({message})}
                          className="NewVisitModal-txtarea"/>
                

                <FormItem>
                    {getFieldDecorator('type', {
                        initialValue: 'chat'
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
