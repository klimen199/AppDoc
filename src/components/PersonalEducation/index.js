import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import Button from '../Button'
import Accordion from '../Accordion'
import PersonalEducationItem from '../PersonalEducationItem'
import Input from '../Input'
import Rate from '../Rate'
import Icon from '../Icon'
import Popover from '../Popover'
import {profileDoctor} from '../PersonalContactItem/mock-data'

import './style.css'
import '../../icon/style.css'

class PersonalEducation extends React.Component{

    render(){
       // const {mainInstitution,  mainSpecialty, secondInstitution, secondSpecialty, mainDateStart, mainDateEnd, dateStart, dateEnd, degree} = this.props;
        const rootClass = cn('personal-education-all');
        const Panel = Accordion.Panel;
        return (
            <div className={rootClass}>
                <Accordion defaultActiveKey={['1']}>
                    <Panel header="Образование" key="1">
                        <PersonalEducationItem
                            profileDoctor={this.props.profileDoctor}
                        />
                    </Panel>
                </Accordion>
            </div>
        )
    }
}

PersonalEducation.propTypes = {
    profileDoctor: PropTypes.object
};

PersonalEducation.defaultProps = {
    profileDoctor: {}
};

export default PersonalEducation