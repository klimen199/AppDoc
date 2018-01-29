import React from 'react';
import PropTypes from 'prop-types'
import moment from 'moment'

import Hoc from '../Hoc'
import Checkbox from '../Checkbox'
import Button from '../Button'


import './style.css'
import '../../icon/style.css'

class Step3 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            checked: false,
        }
    }

    renderItem = (title, key) => {
        return (<div className='check-row' key={key}>
                    <div className='check-title'>{title}:</div>
                    <div className='check-text'>{this.props.data[key]}</div>
                </div>)
    };
    renderTimeItem = (title, key) => {
        return (<div className='check-row' key={key}>
            <div className='check-title'>{title}:</div>
            <div className='check-text'>{moment(this.props.data[key]).format('DD.MM.YYYY')}</div>
        </div>)
    };
    renderYesNoItem = (title, value) => {
        return (<div className='check-row'>
            <div className='check-title'>{title}:</div>
            <div className='check-text'>{value ? 'Да' : 'Нет'}</div>
        </div>)
    };

    renderEducInfo = (data) => {
        let i = 0,
            elArr = [];
        while (true){
            if(data['university'+i]){
                let numPreffics = i > 0 ? ' '+(i+1) : '';
                elArr.push(<Hoc key={'educInfo'+i}>
                    {this.renderItem(`Учебное заведение${numPreffics}`,'university'+i)}
                    {this.renderItem(`Специальность${numPreffics}`,'speciality'+i)}
                    {this.renderItem('Год окончания','graduateYear'+i)}
                </Hoc>)
            }
            else {
                return elArr;
            }
            i++
        }
    };

    renderGraduateEducInfo = (data) => {
        let i = 0,
            elArr = [];
        while (true){
            if(data['institution'+i]
                || data['educCycle'+i]
                || data['educPeriod'+i]){

                let numPreffics = i > 0 ? ' '+(i+1) : '',
                    institution = data['institution'+i],
                    educCycle = data['educCycle'+i],
                    educPeriod = data['educPeriod'+i];
                elArr.push(<Hoc key={'graduateEducInfo'+i}>
                    {institution &&
                    <div className='check-row'>
                        <div className='check-title'>
                            Учебное заведение{numPreffics}:</div>
                        <div className='check-text'>{institution}</div>
                    </div>}
                    {educCycle &&
                    <div className='check-row'>
                        <div className='check-title'>
                            Цикл обучения{numPreffics}:</div>
                        <div className='check-text'>{educCycle}</div>
                    </div>}
                    {educPeriod &&
                    <div className='check-row'>
                        <div className='check-title'>Год окончания:</div>
                        <div className='check-text'>
                            {
                                moment(educPeriod[0]).format('DD.MM.YYYY')
                            } - {
                                moment(educPeriod[1]).format('DD.MM.YYYY')
                            }
                        </div>
                    </div>}
                </Hoc>)
            }
            else {
                return elArr;
            }
            i++
        }
    };

    renderAdditionalInfo = (data) => {
        let langs = data['langs'],
            isChildConsult = data['isChildConsult'],
            consultPayment = data['consultPayment'],
            isFreeConsult = data['isFreeConsult'];
        return (<Hoc>
            {langs &&
            <div className='check-row'>
                <div className='check-title'>Знание языков:</div>
                <div className='check-text'>{langs.map(el => {
                    return (<span key={el}>{el} </span>)
                })}</div>
            </div>}
            {isChildConsult &&
                this.renderYesNoItem('Консультация детей', isChildConsult)}
            {consultPayment &&
            <div className='check-row'>
                <div className='check-title'>Желаемая оплата консльтации:</div>
                <div className='check-text'>
                    {consultPayment}
                </div>
            </div>}
            {isFreeConsult &&
                this.renderYesNoItem('Бесплатные консультации', isFreeConsult)}
        </Hoc>)
    };

    render(){
        const {data} = this.props;

        return (
            <div className="step-form">
                <div className="step-posttitle">Проверьте введенные данные</div>


                {this.renderItem('ФИО','userFio')}
                {this.renderItem('E-mail','userEmail')}
                {this.renderItem('Телефон','userPhone')}
                <div className='check-row'>
                    <div className='check-title'>Пол:</div>
                    <div className='check-text'>
                        {data.userSex === 'man' ? "Мужской" : "Женский"}
                    </div>
                </div>
                {this.renderTimeItem('Дата рождения','userBirthday')}

                {this.renderEducInfo(data)}

                {this.renderGraduateEducInfo(data)}

                {this.renderItem('Место работы','curWork')}
                {this.renderItem('Должность','position')}
                {this.renderTimeItem('Дата начала работы','startDate')}
                {this.renderItem('Категория','category')}

                {this.renderAdditionalInfo(data)}

                <Checkbox checked={this.state.checked}
                          onChange={(e) => this.setState({checked: e.target.checked})}>
                    {this.props.finalText}
                </Checkbox>

                <div className="steps-action">
                    <Button onClick={this.props.onPrev}
                            btnText='Назад'
                            size='large'
                            type='float'
                    />
                    <Button btnText='Завершить'
                            disable={!this.state.checked}
                            onClick={() => this.props.onFinish(this.props.data)}
                            size='large'
                            type='gradient'
                    />
                </div>
            </div>
        )
    }
}

Step3.propTypes = {
    data: PropTypes.object,
    onFinish: PropTypes.func,
};

Step3.defaultProps = {
    data: {},
    onFinish: () => {}
};

export default Step3
