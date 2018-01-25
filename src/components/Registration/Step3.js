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

class Step3 extends React.Component{

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
            <div onSubmit={this.handleSubmit} className="step-form">
                <div className="step-posttitle">Проверьте введенные данные</div>

                <div className='check-row'>
                    <div className='check-title'>ФИО:</div>
                    <div className='check-text'>Иванов Иван Иванович</div>
                </div>

                <div className='check-row'>
                    <div className='check-title'>E-mail:</div>
                    <div className='check-text'>ivanov@mail.ru</div>
                </div>

                <div className='check-row'>
                    <div className='check-title'>Телефон:</div>
                    <div className='check-text'>+375 17 456 44 44</div>
                </div>

                <div className='check-row'>
                    <div className='check-title'>Адрес:</div>
                    <div className='check-text'>г. Минск, пр-т Победителей 17/134</div>
                </div>

                <div className='check-row'>
                    <div className='check-title'>Пол:</div>
                    <div className='check-text'>Мужской</div>
                </div>

                <div className='check-row'>
                    <div className='check-title'>Дата рождения:</div>
                    <div className='check-text'>12.12.1975</div>
                </div>

                <div className='check-row'>
                    <div className='check-title'>Значение 7:</div>
                    <div className='check-text'>Иванов Иван Иванович</div>
                </div>

                <div className='check-row'>
                    <div className='check-title'>Значение 8:</div>
                    <div className='check-text'>ivanov@mail.ru</div>
                </div>

                <div className='check-row'>
                    <div className='check-title'>Значение 9:</div>
                    <div className='check-text'>+375 17 456 44 44</div>
                </div>

                <div className='check-row'>
                    <div className='check-title'>Значение 10:</div>
                    <div className='check-text'>г. Минск, пр-т Победителей 17/134 минск, пр-т Победителей 17/134 Минск, пр-т Победителей 17/134</div>
                </div>

                <div className='check-row'>
                    <div className='check-title'>Значение 11:</div>
                    <div className='check-text'>Мужской</div>
                </div>

                <div className='check-row'>
                    <div className='check-title'>Значение 12:</div>
                    <div className='check-text'>12.12.1975</div>
                </div>
            </div>
        )
    }
}

Step3.propTypes = {
    urlForget: PropTypes.string,
    urlRegistration: PropTypes.string,
    onSubmit: PropTypes.func,
};

Step3.defaultProps = {
    urlForget: '',
    urlRegistration: '',
    onSubmit: () => {},
};

export default Step3
