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

class PersonalExperience extends React.Component{

    render(){
        const {placeOfWord,  post, dateStart, thisTime, expWork} = this.props;
        const rootClass = cn('personal-experience-all');
        const Panel = Accordion.Panel;


        return (
            <div className={rootClass}>
                <Accordion defaultActiveKey={['1']}>
                    <Panel header="Опыт работы" key="1">
                        <PersonalExperienceItem 
                            post={post}
                            placeOfWord={placeOfWord}
                            dateStart={dateStart}
                            expWork={expWork}
                        />
                    </Panel>
                </Accordion>
            </div>
        )
    }
}

PersonalExperience.propTypes = {
    post: PropTypes.string,
    placeOfWord: PropTypes.string,
    dateStart: PropTypes.string,
    expWork: PropTypes.string,
};

PersonalExperience.defaultProps = {
    post: '',
    placeOfWord: '',
    dateStart: '',
    expWork: '',
};


export default PersonalExperience