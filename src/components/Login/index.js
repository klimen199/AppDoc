import React from 'react';
import PropTypes from 'prop-types'

import { Form } from 'antd';
import { NavLink } from 'react-router-dom'
import Button from '../Button'
import Checkbox from '../Checkbox'
import Input from '../Input'


import './style.css'
import '../../icon/style.css'

const FormItem = Form.Item;

class LoginForm extends React.Component{

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.onSubmit(values);
            }
        });
    };

    render(){
        const {urlForgot, urlRegistration} = this.props;

        const { getFieldDecorator } = this.props.form;
        const {userName, password} = this.props.form.getFieldsValue();

        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <div className="login-title">Авторизация</div>
                <div className="login-notification">* Поля, обязательные для заполнения</div>
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Введите ваш логин или e-mail, пожалуйста' }],
                    })(
                        <Input addonBefore='* E-mail или логин'
                               className='login-form-item'/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Введите ваш пароль, пожалуйста' }],
                    })(
                        <Input addonBefore='* Пароль'
                               addonAfter={<NavLink className="login-form-navlink"
                                                    to={urlForgot}>Забыли пароль?</NavLink>}
                               type="password"
                               className='login-form-item'/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: false,
                    })(
                        <Checkbox>Запомнить меня</Checkbox>
                    )}
                </FormItem>
                <div className="login-form-control">
                    <Button disable={!(userName && password)}
                            htmlType="submit"
                            btnText='Войти'
                            size='large'
                            type='gradient'/>
                    <div>У вас еще нет аккаунта? <NavLink to={urlRegistration}
                                                          className="login-form-navlink">Зарегистрироваться</NavLink>
                    </div>
                </div>
            </Form>
        )
    }
}

const Login = Form.create()(LoginForm);

Login.propTypes = {
    urlForgot: PropTypes.string,
    urlRegistration: PropTypes.string,
    onSubmit: PropTypes.func,
};

Login.defaultProps = {
    urlForgot: '*',
    urlRegistration: '*',
    onSubmit: () => {},
};

export default Login