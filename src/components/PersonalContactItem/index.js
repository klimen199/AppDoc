import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import Button from '../Button'
import Input from '../Input'
import Rate from '../Rate'
import Icon from '../Icon'
import Popover from '../Popover'

import './style.css'
import '../../icon/style.css'

class PersonalContactItem extends React.Component{

    render(){
        const {secondname, firstname, patronymic, phone, email, oldPassword, newPassword} = this.props;
        const rootClass = cn('personal-contact');
        let fio = `${secondname} ${firstname} ${patronymic}`

        return (
            <div className={rootClass}>
                <div className="personal-block">
                    <div className="personal-item">
                        <div className="personal-title">контактные данные</div>
                    </div>
                    <div className="personal-item">
                        <Input addonBefore="ФИО" defaultValue={fio} />
                    </div>
                    <div className="personal-item">
                        <Input addonBefore="Телефона" defaultValue={phone}/>
                    </div>
                    <div className="personal-item">
                        <Input addonBefore="Email" defaultValue={email}/>
                    </div>
                </div>

                <div className="personal-block">
                    <div className="personal-item">
                        <div className="personal-title">изменить пароль</div>
                    </div>
                    <div className="personal-item">
                        <Input addonBefore="Текущий пароль" defaultValue={oldPassword} type="password"/>
                    </div>
                    <div className="personal-item">
                        <Input addonBefore="Новый пароль" defaultValue={newPassword} />
                    </div>
                </div>

                <Button 
                    btnText='Сохранить изменения'
                    size='default'
                    type='float'
                />
            </div>
        )
    }
}

PersonalContactItem.propTypes = {
    secondname: PropTypes.string,
    firstname: PropTypes.string,
    patronymic: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    oldPassword: PropTypes.string,
    newPassword: PropTypes.string,

};

PersonalContactItem.defaultProps = {
    secondname: '',
    firstname: '',
    patronymic: '',
    phone: '',
    email: '',
    oldPassword: '',
    newPassword: ''
};

export default PersonalContactItem