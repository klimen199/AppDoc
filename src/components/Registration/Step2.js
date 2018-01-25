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
import Upload from '../Upload'
import Select from '../Select'


import './style.css'
import '../../icon/style.css'

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

class Step2 extends React.Component{
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
                <div className="step-item" key={i}>
                    <FormItem>
                         <Input addonBefore='* Учебное заведение'
                                className='step-form-item'/>
                    </FormItem>
                    <FormItem>
                         <Input addonBefore='* Специальность'
                                className='step-form-item'/>
                    </FormItem>
                    <div className="step-row">
                        <FormItem>
                             <Input addonBefore='* Год окончания'
                                    className='step-form-item'/>
                        </FormItem>
                        <FormItem>
                             <Upload text="Прикрепить диплом, свидетельство"/>
                        </FormItem>
                    </div>
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
                <div className="step-block-item" key={i}>
                    <FormItem>
                         <Input addonBefore='Ученая степень'
                                className='step-form-item'/>
                    </FormItem>
                    <FormItem>
                        <Upload text="Прикрепить документ, подтверждающий ученую степень"/>
                    </FormItem>
                </div>
            )
        }
        return (
            <div className="new-d">
                {dpArr2}
            </div>
            );
    };

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
            <Form onSubmit={this.handleSubmit} className="step-form">
                <div className="step-posttitle">Заполните сведения об образовании и работе</div>
                <div className="step-notification">Просим образование по основным специальностям указывать в блоке Образование (с дипломом и свидетельством), а по дополнительным квалификационным программам  (в том числе присвоение ученой степени) - в блоке Последипломное образование.</div>
                <div className="step-notification">* Поля, обязательные для заполнения</div>

                <div className="step-block">
                    <div className="step-block-title">сведения об образовании</div>
                    <FormItem>
                         <Input addonBefore='* Учебное заведение'
                                   className='step-form-item'/>
                    </FormItem>
                    <FormItem>
                         <Input addonBefore='* Специальность'
                                   className='step-form-item'/>
                    </FormItem>
                    <div className="step-row">
                        <FormItem>
                             <Input addonBefore='* Год окончания'
                                       className='step-form-item'/>
                        </FormItem>
                        <FormItem>
                             <Upload text="Прикрепить диплом, свидетельство"/>
                        </FormItem>
                    </div>
                    <Button onClick={this.addDp}
                            className="personal-btn"
                            btnText='Добавить'
                            size='small'
                            type='no-brd'
                            icon='plus'
                            iconSize={11}
                            svg
                    />
                    {this.renderDp()}
                </div>

                <div className="step-block">
                    <div className="step-block-title-post">Последипломное образование</div>
                    <FormItem>
                         <Input addonBefore='Учебное заведение'
                                   className='step-form-item'/>
                    </FormItem>
                    <FormItem>
                         <Input addonBefore='Название цикла обучения'
                                   className='step-form-item'/>
                    </FormItem>
                    <FormItem>
                          <DatePicker range placeholderStart="Начало обучения" placeholderEnd="Окончание обучения"/>
                    </FormItem>
                    <FormItem>
                         <Upload text="Прикрепить диплом (сертификат, свидетельство)"/>
                    </FormItem>
                    <Button onClick={this.addDp2}
                            className="personal-btn"
                            btnText='Добавить'
                            size='small'
                            type='no-brd'
                            icon='plus'
                            iconSize={11}
                            svg
                    />
                    {this.renderDp2()}
                </div>

                <div className="step-block">
                    <div className="step-block-title">сведения о работе</div>
                    <FormItem>
                         <Input addonBefore='* Текущее место работы'
                                   className='step-form-item'/>
                    </FormItem>
                    
                    <div className="step-row">
                        <FormItem>
                             <Input addonBefore='* Должность'
                                       className='step-form-item'/>
                        </FormItem>
                        <FormItem>
                             <DatePicker placeholder='* Дата начала работы'/>
                        </FormItem>
                    </div>
                    <FormItem>
                        <Upload text="Прикрепить копию контракта"/>
                    </FormItem>

                    <div className='new-d'>
                        <div className="step-block-item">
                            <FormItem>
                                <Input  addonBefore='* Категория'
                                        className='step-form-item'/>
                            </FormItem>
                        </div>
                        <PicturesWall />
                    </div>
                </div>

                <div className="step-block">
                    <div className="step-block-title">Дополнительная информация</div>
                    <FormItem>
                        <Select mode="multiple" placeholder="Какими языками владеете">
                            <Option value="5 мин">Русский</Option>
                            <Option value="10 мин">Английсктй</Option>
                            <Option value="15 мин">Немецкий</Option>
                        </Select>
                    </FormItem>
                    <div className='radio-label'>Консультация детей:
                        <RadioGroup>
                            <Radio value={1}>Да</Radio>
                            <Radio value={2}>Нет</Radio>
                        </RadioGroup>
                    </div>
                    <FormItem>
                        <Select placeholder="Желаемая сумма оплаты за консультацию">
                            <Option value="5 мин">100</Option>
                            <Option value="10 мин">300</Option>
                            <Option value="15 мин">500</Option>
                        </Select>
                    </FormItem>
                    <div className='radio-label'>Готовы проводить консультации бесплатно?
                        <RadioGroup>
                            <Radio value={1}>Да</Radio>
                            <Radio value={2}>Нет</Radio>
                        </RadioGroup>
                    </div>
                </div>
            </Form>
        )
    }
}

Step2.propTypes = {
    urlForget: PropTypes.string,
    urlRegistration: PropTypes.string,
    onSubmit: PropTypes.func,
};

Step2.defaultProps = {
    urlForget: '',
    urlRegistration: '',
    onSubmit: () => {},
};

export default Step2
