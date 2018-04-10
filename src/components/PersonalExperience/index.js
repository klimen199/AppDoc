import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import Button from '../Button'
import Accordion from '../Accordion'
import PersonalExperienceItem from '../PersonalExperienceItem'
import Input from '../Input'
import Rate from '../Rate'
import Icon from '../Icon'
import Popover from '../Popover'

import './style.css'
import '../../icon/style.css'
import {profileDoctor} from '../PersonalContactItem/mock-data'
import PersonalInformation from "../PersonalInformation";

class PersonalExperience extends React.Component{

    render(){
        const rootClass = cn('personal-experience-all');
        const Panel = Accordion.Panel;

        return (

            <div className={rootClass}>
                <Accordion defaultActiveKey={['1']}>
                    <Panel header="Опыт работы" key="1">
                        <PersonalExperienceItem
                            profileDoctor={this.props.profileDoctor}
                        />
                    </Panel>
                </Accordion>
            </div>
        )
    }
}

PersonalExperience.propTypes = {
    profileDoctor: PropTypes.object
};

PersonalExperience.defaultProps = {
    profileDoctor: {}
};


export default PersonalExperience