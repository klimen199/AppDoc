import React from 'react';
import PropTypes from 'prop-types'

import { Form } from 'antd';
import { NavLink } from 'react-router-dom'
import Button from '../Button'
import Checkbox from '../Checkbox'
import Input from '../Input'
import Radio from '../RadioBox'
import DatePicker from '../DatePicker'
import PicturesWall from '../UploadBig'


import './style.css'
import '../../icon/style.css'

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

class Step1 extends React.Component{

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.onSubmit(values);
            }
        });
    };

    render(){
        const {urlForget, urlRegistration} = this.props;
        return (
            <Form onSubmit={this.handleSubmit} className="step-form">
                <div className="step-posttitle">Заполните основные контактные данные</div>
                <div className="step-notification">* Поля, обязательные для заполнения</div>
                <FormItem>
                    {/*{getFieldDecorator('userFio', {
                        rules: [{ required: true, message: 'Введите ФИО, пожалуйста' }],
                    })(*/}
                        <Input addonBefore='* ФИО'
                               className='step-form-item'/>
                    {/*)}*/}
                </FormItem>
                <FormItem>
                    {/*{getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Введите ваш e-mail, пожалуйста' }],
                    })(*/}
                        <Input addonBefore='* E-mail'
                               className='step-form-item'/>
                    {/*)}*/}
                </FormItem>
                <FormItem>
                    {/*{getFieldDecorator('userPhone', {
                        rules: [{ required: true, message: 'Введите ваш телефон, пожалуйста' }],
                    })(*/}
                        <Input addonBefore='* Телефон'
                               className='step-form-item'/>
                    {/*)}*/}
                </FormItem>
                <div className="step-row">
                    <FormItem>
                        {/*{getFieldDecorator('userSex', {
                            rules: [{ required: true, message: 'Выберите пол, пожалуйста' }],
                        })(*/}
                            <div className='radio-label'>* Пол
                                <RadioGroup>
                                    <Radio value={1}>Жен.</Radio>
                                    <Radio value={2}>Муж.</Radio>
                                </RadioGroup>
                            </div>
                       {/* )} */} 
                    </FormItem>
                    <FormItem>
                        {/*{getFieldDecorator('userBirthday', {
                            rules: [{ required: true, message: 'Введите дату вашего рождения, пожалуйста' }],
                        })(*/}
                            <div className='radio-label'>* Дата рождения
                                <DatePicker  placeholder="дд/мм/гггг"/>
                            </div>
                        {/*)}*/}
                    </FormItem>
                </div>
            </Form>
        )
    }
}

Step1.propTypes = {
    urlForget: PropTypes.string,
    urlRegistration: PropTypes.string,
    onSubmit: PropTypes.func,
};

Step1.defaultProps = {
    urlForget: '',
    urlRegistration: '',
    onSubmit: () => {},
};

export default Step1
