import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import Button from '../Button'
import Accordion from '../Accordion'
import PersonalContactItem from '../PersonalContactItem'
import Input from '../Input'
import Rate from '../Rate'
import Icon from '../Icon'
import Popover from '../Popover'

import './style.css'
import '../../icon/style.css'

class PersonalContact extends React.Component{

    render(){
        const {secondname, firstname, patronymic, phone, email, oldPassword, newPassword} = this.props;
        const rootClass = cn('personal-contact-all');
        const Panel = Accordion.Panel;


        return (
            <div className={rootClass}>
                <Accordion defaultActiveKey={['1']}>
                    <Panel header="Контакты" key="1">
                        <PersonalContactItem 
                            secondname={secondname} 
                            firstname={firstname} 
                            patronymic={patronymic} 
                            phone={phone} 
                            email={email} 
                            oldPassword={oldPassword} 
                            newPassword={newPassword} 
                        />
                    </Panel>
                </Accordion>
            </div>
        )
    }
}

PersonalContact.propTypes = {
    secondname: PropTypes.string,
    firstname: PropTypes.string,
    patronymic: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    oldPassword: PropTypes.string,
    newPassword: PropTypes.string,

};

PersonalContact.defaultProps = {
    secondname: '',
    firstname: '',
    patronymic: '',
    phone: '',
    email: '',
    oldPassword: '',
    newPassword: ''
};


export default PersonalContact