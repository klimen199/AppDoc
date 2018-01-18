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
        const {langData, lang, langItem} = this.props;
        const rootClass = cn('personal-information-all');
        const Panel = Accordion.Panel;


        return (
            <div className={rootClass}>
                <Accordion defaultActiveKey={['1']}>
                    <Panel header="Опыт работы" key="1">
                        <PersonalInformationItem 
                            langData={langData}
                        />
                    </Panel>
                </Accordion>
            </div>
        )
    }
}

PersonalInformation.propTypes = {
    langItem: PropTypes.array,
};

PersonalInformation.defaultProps = {
    langItem: [],
};


export default PersonalInformation