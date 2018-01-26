import React from 'react';
import PropTypes from 'prop-types'

import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Steps from '../Step'


import './style.css'
import '../../icon/style.css'


class RegistrationForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            current: 0,
        }
        this.steps = [{
            title: 'Контактная информация',
            content:
                <Step1 onSubmit={(data) => this.setState({...data})}
                       onNext={this.next}/>,
        }, {
            title: 'Образование, опыт работы',
            content: <Step2/>,
        }, {
            title: 'Проверка данных',
            content: <Step3/>,
        }];
    }

    next = () => {
        const current = this.state.current + 1;
        this.setState({ current });
    }
    prev = () => {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    render(){

        return (
            <div className="registration-form">
                <div className="registration-title">Регистрация</div>
                <Steps steps={this.steps}
                       current={this.state.current}
                       onNext = {this.next}
                       onPrev={this.prev}
                       onFinish={(e) => console.log(e)}
                />
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
