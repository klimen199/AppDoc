import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import Button from '../Button'
import Upload from '../Upload'
import Checkbox from '../Checkbox'
import Select from '../Select'
import DatePicker from '../DatePicker'
import Input from '../Input'

import './style.css'
import '../../icon/style.css'

class PersonalExperienceItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dpNum: 0,
            dpNum2: 0,
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
                    <Input addonBefore="Наименование места работы" />
                    <Input addonBefore="Должность"/>
                    <DatePicker placeholder="Дата начала работы"/>
                    <Checkbox>Продолжаю работать</Checkbox>
                    <Upload text="Прикрепить копию контракта"/>
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
        if(dpNum2<1)
            this.setState({dpNum2:(dpNum2+1)})
    };

    renderDp2 = () =>{
        let dpArr2 = [];
        for(let i =0; i<this.state.dpNum2;i++){
            dpArr2.push(
                <div className="personal-item" key={i}>
                    <Input addonBefore="Наименование места работы" />
                    <Input addonBefore="Должность"/>
                    <DatePicker placeholder="Дата начала работы"/>
                    <Checkbox>Продолжаю работать</Checkbox>
                    <Upload text="Прикрепить копию контракта"/>
                </div>
            )
        }
        return (
            <div className="new-d">
                {dpArr2}
            </div>
            );
    };

    render(){
        const {placeOfWord,  post, dateStart, thisTime, expWork} = this.props;
        const Option = Select.Option;
        const rootClass = cn('personal-experience');

        return (
            <div className={rootClass}>
                <div className="personal-block">
                    <div className="personal-item">
                        <div className="expWork">Опыт работы ({expWork} лет)</div>
                    </div>
                    <div className="personal-item">
                        <div className="personal-title">Текущее место работы</div>
                        <Button
                                className="personal-delete"
                                btnText='Удалить'
                                size='link'
                                type='link'
                                icon='circle_close'
                                iconSize={16}
                                svg
                        />
                    </div>
                    <div className="personal-item mb-35">
                        <div className="personal-info"><b>{post}</b></div>
                        <div className="personal-info">{placeOfWord}</div>
                        <div className="personal-info">{dateStart} - {thisTime}</div>
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
                         <Button onClick={this.addDp2}
                         className="personal-btn"
                            btnText='Добавить категорию'
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

PersonalExperienceItem.propTypes = {
    post: PropTypes.string,
    placeOfWord: PropTypes.string,
    dateStart: PropTypes.string,
    thisTime: PropTypes.string,
    expWork: PropTypes.string,
};

PersonalExperienceItem.defaultProps = {
    post: '',
    placeOfWord: '',
    dateStart: '',
    expWork: '',
    thisTime: 'Настоящее время',
};

export default PersonalExperienceItem