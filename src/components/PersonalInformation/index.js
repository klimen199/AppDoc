import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import Button from '../Button'
import Accordion from '../Accordion'
import PersonalInformationItem from '../PersonalInformationItem'
import Input from '../Input'
import Rate from '../Rate'
import Icon from '../Icon'
import Popover from '../Popover'

import './style.css'
import '../../icon/style.css'

class PersonalInformation extends React.Component{

    render(){
        const {langData, priceData} = this.props;
        const rootClass = cn('personal-information-all');
        const Panel = Accordion.Panel;


        return (
            <div className={rootClass}>
                <Accordion defaultActiveKey={['1']}>
                    <Panel header="Опыт работы" key="1">
                        <PersonalInformationItem 
                            langData={langData}
                            priceData={priceData}
                        />
                    </Panel>
                </Accordion>
            </div>
        )
    }
}

export default PersonalInformation