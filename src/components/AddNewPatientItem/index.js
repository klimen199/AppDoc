import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import Button from '../Button'
import ProfileAvatar from '../ProfileAvatar'


import './style.css'
import '../../icon/style.css'

class AddNewPatientItem extends React.Component{

    render(){
        const { name, age, img, online } = this.props;
        const rootClass = cn('new-patient-item');


        return (
            <div className='new-patient-item'>
                <div className='new-patient-avatar'><ProfileAvatar owner="patient" online={online} img={img} size='small'/></div>
                <div className='new-patient-info'>
                    <div className='new-patient-name'>{name}</div>
                    <div className='new-patient-age'>{age} лет</div>
                </div>
                <div className='new-patient-btn'>
                    <Button
                        btnText=''
                        size='file'
                        type='file'
                        icon='add-button'
                        svg
                    />
                </div>
            </div>
        )
    }
}

AddNewPatientItem.propTypes = {
    name: PropTypes.string,
    age: PropTypes.string,
    img: PropTypes.string,
    online: PropTypes.string,
};

AddNewPatientItem.defaultProps = {
    name: '',
    age: '',
    online: '',
    img: '',
};

export default AddNewPatientItem