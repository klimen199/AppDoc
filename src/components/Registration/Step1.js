import React from 'react';
import PropTypes from 'prop-types'

import { Form } from 'antd';
import Input from '../Input'
import Radio from '../RadioBox'
import DatePicker from '../DatePicker'
import Button from '../Button'

import './style.css'
import '../../icon/style.css'

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

class Step1Form extends React.Component{

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.onSubmit(values);
                this.props.onNext();
            }
        });
    };

    render(){
        const { getFieldDecorator } = this.props.form;
        const {userFio,
            userEmail,
            userPhone,
            userSex,
            userBirthday} = this.props.form.getFieldsValue();

        return (
            <Form onSubmit={this.handleSubmit} className="step-form">
                <div className="step-posttitle">Заполните основные контактные данные</div>
                <div className="step-notification">* Поля, обязательные для заполнения</div>
                <FormItem>
                    {getFieldDecorator('userFio', {
                        rules: [{ required: true,
                            message: 'Введите ФИО, пожалуйста' }],
                    })(
                        <Input addonBefore='* ФИО'
                               className='step-form-item'/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('userEmail', {
                        rules: [{ required: true,
                            message: 'Введите ваш e-mail, пожалуйста' }],
                    })(
                        <Input addonBefore='* E-mail'
                               className='step-form-item'/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('userPhone', {
                        rules: [{ required: true,
                            message: 'Введите ваш телефон, пожалуйста' }],
                    })(
                        <Input addonBefore='* Телефон'
                               className='step-form-item'/>
                    )}
                </FormItem>
                <div className="step-row">
                    <FormItem>
                        <div className='radio-label'>* Пол
                        {getFieldDecorator('userSex', {
                            rules: [{ required: true,
                                message: 'Выберите пол, пожалуйста' }],
                        })(
                            <RadioGroup>
                                <Radio value='man'>Жен.</Radio>
                                <Radio value='woman'>Муж.</Radio>
                            </RadioGroup>
                       )}
                        </div>
                    </FormItem>
                    <FormItem>
                        <div className='radio-label'>* Дата рождения
                        {getFieldDecorator('userBirthday', {
                            rules: [{ required: true,
                                message: 'Введите дату вашего рождения, пожалуйста' }],
                        })(
                            <DatePicker placeholder="дд/мм/гггг"/>
                        )}
                        </div>
                    </FormItem>
                </div>
                <div className="steps-action">
                    <Button htmlType="submit"
                            disable={!(userFio&&
                                userEmail &&
                                userPhone &&
                                userSex &&
                                userBirthday)}
                            btnText='Далее'
                            size='large'
                            type='gradient'/>
                </div>
            </Form>
        )
    }
}

const Step1 = Form.create()(Step1Form);


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
