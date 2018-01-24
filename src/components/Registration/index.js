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
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import App from '../Step'


import './style.css'
import '../../icon/style.css'

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

class RegistrationForm extends React.Component{

    render(){
        return (
            <div className="registration-form">
                <div className="registration-title">Регистрация</div>
                <App />
                {/*<Step1 />
                <Step2 />*/}
                <Step3 />
            </div>
        )
    }
}


RegistrationForm.propTypes = {
    urlForget: PropTypes.string,
    urlRegistration: PropTypes.string,
    onSubmit: PropTypes.func,
};

RegistrationForm.defaultProps = {
    urlForget: '',
    urlRegistration: '',
    onSubmit: () => {},
};

export default RegistrationForm
