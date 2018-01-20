import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import { Form } from 'antd';
import Card from '../Card'
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
                console.log('Received values of form: ', values);
            }
        });
    };

    render(){
        const rootClass = cn('login');


        const { getFieldDecorator } = this.props.form;

        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Введите имя пользователя!' }],
                    })(
                        <Input placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Введите пароль!' }],
                    })(
                        <Input type="password"
                               placeholder="Password"
                               addonAfter={<a className="login-form-forgot" href="">Forgot password</a>}/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Запомнить меня</Checkbox>
                    )}
                    <Button htmlType="submit" btnText='Войти'/>
                    <div>У вас еще нет аккаунта? <a href="#">Зарегистрироваться</a></div>
                </FormItem>
            </Form>
            // <div className={rootClass}>
            //     <Card className="login-card">
            //         <div className="login-title">Авторизация</div>
            //         <div className="login-notification">* Поля, обязательные для заполнения</div>
            //             <div className="login-item">
            //                 <Input addonBefore="* E-mail или логин" />
            //             </div>
            //             <div className="login-item">
            //                 <Input addonBefore="* Пароль" addonAfter={<a href="#">Забыли пароль?</a>}/>
            //             </div>
            //             <div className="login-item">
            //                 <Checkbox>Запомнить меня</Checkbox>
            //             </div>
            //             <div className="login-item login-center">
            //                 <Button disable
            //                         htmlType="submit"
            //                         btnText='Войти'
            //                         size='large'
            //                         type='gradient'
            //                 />
            //             </div>
            //         <div className="login-item login-center">
            //             <p>У вас еще нет аккаунта? <a href="#">Зарегистрироваться</a></p>
            //         </div>
            //       </Card>
            // </div>
        )
    }
}

const Login = Form.create()(LoginForm);

export default Login