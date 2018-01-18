import React from 'react';
import PropTypes from 'prop-types'
import { action } from '@storybook/addon-actions';
import cn from 'classnames'

import Button from '../Button'
import Upload from '../Upload'
import Checkbox from '../Checkbox'
import Select from '../Select'
import DatePicker from '../DatePicker'
import Input from '../Input'
import Icon from '../Icon'
import Radio from '../RadioBox'

import './style.css'
import '../../icon/style.css'

class PersonalInformationItem extends React.Component{

    render(){
        const {langData, lang, langItem} = this.props;
        const langOptions = langData.map(lang => <Option key={lang}>{lang}</Option>);

        const rootClass = cn('personal-information');
        const RadioGroup = Radio.Group;

        return (
            <div className={rootClass}>
                <div className="personal-block">
                    <div className="personal-item">
                        <Select  mode="multiple" defaultValue={langData[0]} >
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
                          <Option value="50 - 100 руб">50 - 100 руб</Option>
                          <Option value="100 - 200 руб">100 - 200 руб</Option>
                          <Option value="200 - 1000 руб">200 - 1000 руб</Option>
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

PersonalInformationItem.propTypes = {
    langItem: PropTypes.array,
};

PersonalInformationItem.defaultProps = {
    langItem: [],
};

export default PersonalInformationItem