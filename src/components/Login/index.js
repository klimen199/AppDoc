import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import { Form } from 'antd';
import Card from '../Card'
import Button from '../Button'
import Checkbox from '../Checkbox'
import Input from '../Input'
import Icon from '../Icon'

import './style.css'
import '../../icon/style.css'

class Login extends React.Component{

    render(){
        const rootClass = cn('login');
        const FormItem = Form.Item;
        return (
            <div className={rootClass}>
                <Card className="login-card">
                    <div className="login-title">Авторизация</div>
                    <div className="login-notification">* Поля, обязательные для заполнения</div>
                        <div className="login-item">
                            <Input addonAfter="* E-mail или логин" />
                        </div>
                        <div className="login-item">
                            <Input addonAfter="* Пароль" />
                            <a className="login-lost" href="#">Забыли пароль?</a>
                        </div>
                        <div className="login-item">
                            <Checkbox>Запомнить меня</Checkbox>
                        </div>
                        <div className="login-item login-center">
                            <Button disable
                                    htmlType="submit" 
                                    btnText='Войти'
                                    size='large'
                                    type='gradient'
                            />
                        </div>
                    <div className="login-item login-center">
                        <p>У вас еще нет аккаунта? <a href="#">Зарегистрироваться</a></p>
                    </div>
                  </Card>
            </div>
        )
    }
}

export default Login