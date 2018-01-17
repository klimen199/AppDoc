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

import './style.css'
import '../../icon/style.css'

class PersonalEducation extends React.Component{

    render(){
        const {mainInstitution,  mainSpecialty, secondInstitution, secondSpecialty, mainDateStart, mainDateEnd, dateStart, dateEnd, degree} = this.props;
        const rootClass = cn('personal-education-all');
        const Panel = Accordion.Panel;


        return (
            <div className={rootClass}>
                <Accordion defaultActiveKey={['1']}>
                    <Panel header="Образование" key="1">
                        <PersonalEducationItem 
                            mainInstitution={mainInstitution} 
                            mainSpecialty={mainSpecialty} 
                            secondInstitution={secondInstitution}
                            secondSpecialty={secondSpecialty}
                            mainDateStart={mainDateStart}
                            mainDateEnd={mainDateEnd}
                            dateStart={dateStart}
                            dateEnd={dateEnd}
                            degree={degree}
                        />
                    </Panel>
                </Accordion>
            </div>
        )
    }
}

PersonalEducation.propTypes = {
    mainInstitution: PropTypes.string,
    secondInstitution: PropTypes.string,
    mainSpecialty: PropTypes.string,
    secondSpecialty: PropTypes.string,
    mainDateStart: PropTypes.string,
    mainDateEnd: PropTypes.string,
    dateStart: PropTypes.string,
    dateEnd: PropTypes.string,
    degree: PropTypes.string
};

PersonalEducation.defaultProps = {
    mainInstitution: '',
    mainSpecialty: '',
    secondInstitution: '',
    secondSpecialty: '',
    mainDateStart: '',
    mainDateEnd: '',
    dateStart: '',
    dateEnd: '',
    degree: ''
};


export default PersonalEducation