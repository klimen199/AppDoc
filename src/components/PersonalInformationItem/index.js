import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import Button from '../Button'
import Checkbox from '../Checkbox'
import Select from '../Select'
import Radio from '../RadioBox'

import './style.css'
import '../../icon/style.css'

class PersonalInformationItem extends React.Component{

    render(){
        const {langData, priceData} = this.props;
        const Option = Select.Option;
        const langOptions = langData.map(lang => <Option key={lang}>{lang}</Option>);
        const priceOptions = priceData.map(price => <Option key={price}>{price}</Option>);

        const rootClass = cn('personal-information');
        const RadioGroup = Radio.Group;

        return (
            <div className={rootClass}>
                <div className="personal-block">
                    <div className="personal-item">
                        <Select  mode="multiple">
                          {langOptions}
                        </Select>
                    </div>
                    <div className="personal-item">
                        <div className="radio-block">
                            <div className="radio-title">Консультация детей:</div>
                            <RadioGroup onChange={this.onChange}>
                                <Radio value={1}>Да</Radio>
                                <Radio value={2}>Нет</Radio>
                            </RadioGroup>
                        </div>
                    </div>
                    <div className="personal-item">
                        <Select defaultValue="Желаемая сумма оплаты за консультацию">
                          {priceOptions}
                        </Select>
                    </div>
                    <div className="personal-item">
                        <div className="radio-block">
                            <div className="radio-title">Готовы проводить консультации бесплатно?</div>
                            <Checkbox>Да</Checkbox>
                        </div>
                    </div>
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

export default PersonalInformationItem