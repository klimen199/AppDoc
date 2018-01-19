import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import Button from '../Button'
import Upload from '../Upload'
import Select from '../Select'
import DatePicker from '../DatePicker'
import Input from '../Input'
import Icon from '../Icon'

import './style.css'
import '../../icon/style.css'

class PersonalEducationItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dpNum: 0,
            dpNum2: 0,
            dpNum3: 0,
            dpNum4: 0,
        }
    }

    addDp = () => {
        const {dpNum} = this.state;
        if(dpNum<1)
            this.setState({dpNum:(dpNum+1)})
    };

    renderDp = () =>{
        let dpArr = [];
        for(let i =0; i<this.state.dpNum;i++){
            dpArr.push(
                <div className="personal-item" key={i}>
                    <Input addonAfter="Учебное заведение" />
                    <Input addonAfter="Специальность"/>
                    <DatePicker range placeholderStart="Начало обучения" placeholderEnd="Окончание обучения"/>
                    <Upload text="Прикрепить документ, подтверждающий ученую степень"/>
                </div>
            )
        }
        return (
            <div className="new-d">
                {dpArr}
            </div>
            );
    };

    addDp2 = () => {
        const {dpNum2} = this.state;
        if(dpNum2<2)
            this.setState({dpNum2:(dpNum2+1)})
    };

    renderDp2 = () =>{
        let dpArr2 = [];
        for(let i =0; i<this.state.dpNum2;i++){
            dpArr2.push(
                <div className="personal-item" key={i}>
                    <Input addonAfter="Учебное заведение" />
                    <Input addonAfter="Название цикла обучения"/>
                    <DatePicker range placeholderStart="Начало обучения" placeholderEnd="Окончание обучения"/>
                    <Upload text="Прикрепить документ, подтверждающий ученую степень"/>
                </div>
            )
        }
        return (
            <div className="new-d">
                {dpArr2}
            </div>
            );
    };

    addDp3 = () => {
        const {dpNum3} = this.state;
        if(dpNum3<2)
            this.setState({dpNum3:(dpNum3+1)})
    };

    renderDp3 = () =>{
        let dpArr3 = [];
        for(let i =0; i<this.state.dpNum3;i++){
            dpArr3.push(
                <div className="personal-item" key={i}>
                    <Select defaultValue="Ученая степень">
                      <Option value="Пункт 1">Пункт 1</Option>
                      <Option value="Пункт 2">Пункт 2</Option>
                      <Option value="Пункт 3">Пункт 3</Option>
                    </Select>
                    <Upload text="Прикрепить документ, подтверждающий ученую степень"/>
                </div>
            )
        }
        return (
            <div className="new-d">
                {dpArr3}
            </div>
            );
    };

    addDp4 = () => {
        const {dpNum4} = this.state;
        if(dpNum4<2)
            this.setState({dpNum4:(dpNum4+1)})
    };

    renderDp4 = () =>{
        let dpArr4 = [];
        for(let i =0; i<this.state.dpNum4;i++){
            dpArr4.push(
                <div className="personal-item" key={i}>
                    <Select defaultValue="Ученая степень">
                      <Option value="Пункт 1">Пункт 1</Option>
                      <Option value="Пункт 2">Пункт 2</Option>
                      <Option value="Пункт 3">Пункт 3</Option>
                    </Select>
                    <Upload text="Прикрепить документ, подтверждающий ученую степень"/>
                </div>
            )
        }
        return (
            <div className="new-d">
                {dpArr4}
            </div>
            );
    };

    render(){
        const {mainInstitution,  mainSpecialty, secondInstitution, secondSpecialty, mainDateStart, mainDateEnd, dateStart, dateEnd, degree} = this.props;
        const Option = Select.Option;
        const rootClass = cn('personal-education');

        return (
            <div className={rootClass}>
                <div className="personal-block">
                    <div className="personal-item">
                        <div className="personal-title">Основное образование</div>
                    </div>
                    <div className="personal-item mb-35">
                        <div className="personal-info">{mainInstitution}, {mainDateStart}-{mainDateEnd}</div>
                        <div className="personal-info">{mainSpecialty}</div>
                    </div>
                    
                    <div className="personal-item">
                         <Button onClick={this.addDp}
                            className="personal-btn"
                            btnText='Добавить'
                            size='small'
                            type='no-brd'
                            icon='plus'
                            iconSize={11}
                            svg
                        />
                    </div>
                    {this.renderDp()}
                </div>

                <div className="personal-block">
                    <div className="personal-item">
                        <div className="personal-title">Последипломное образование</div>
                    </div>
                    <div className="personal-item pb-25 mb-35 brd-b brd-d">
                        <div className="personal-info">{secondInstitution}, {dateStart}-{dateEnd}</div>
                        <div className="personal-info">{secondSpecialty}</div>
                    </div>
                    
                    <div className="personal-item">
                         <Button onClick={this.addDp2}
                         className="personal-btn"
                            btnText='Добавить'
                            size='small'
                            type='no-brd'
                            icon='plus'
                            iconSize={11}
                            svg
                        />
                    </div>
                    {this.renderDp2()}
                </div>

                <div className="personal-block">
                    <div className="personal-item">
                        <div className="personal-title">Ученая степень</div>
                    </div>
                    <div className="personal-item mb-35">
                        <div className="personal-info">{degree}</div>
                        <Button onClick={this.addDp3}
                            className="personal-edit"
                            size='small'
                            type='blue-float'
                            icon='setting_edit'
                            iconSize={17}
                            svg
                        />
                    </div>
                    {this.renderDp3()}
                </div>

                <div className="personal-block">
                    <div className="personal-item">
                         <Button onClick={this.addDp4}
                         className="personal-btn"
                            btnText='Добавить ученое звание'
                            size='small'
                            type='no-brd'
                            icon='plus'
                            iconSize={11}
                            svg
                        />
                    </div>
                    {this.renderDp4()}
                </div>
                <div className="personal-block">
                    <Button 
                        btnText='Сохранить изменения'
                        size='default'
                        type='float'
                    />
                </div>
                
            </div>
        )
    }
}

PersonalEducationItem.propTypes = {
    mainInstitution: PropTypes.string,
    secondInstitution: PropTypes.string,
    mainSpecialty: PropTypes.string,
    secondSpecialty: PropTypes.string,
    mainDateStart: PropTypes.string,
    mainDateEnd: PropTypes.string,
    dateStart: PropTypes.string,
    dateEnd: PropTypes.string,
    degree: PropTypes.string
};

PersonalEducationItem.defaultProps = {
    mainInstitution: '',
    mainSpecialty: '',
    secondInstitution: '',
    secondSpecialty: '',
    mainDateStart: '',
    mainDateEnd: '',
    dateStart: '',
    dateEnd: '',
    degree: ''
};

export default PersonalEducationItem