import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import Button from '../Button'
import ProfileAvatar from '../ProfileAvatar'


import './style.css'
import '../../icon/style.css'

class AddNewPatientItem extends React.Component{

    onAddHandler = (e) => {
        e.preventDefault();
        this.props.onAdd(this.props.id);
    }

    render(){
        const { name, age, img, online, isSearchItem} = this.props;
        const rootClass = cn('new-patient-item');

        return (
            <div className='new-patient-item' onClick={isSearchItem ? this.onAddHandler : () => {}}>
                <div className='new-patient-avatar'>
                    <ProfileAvatar owner="patient" online={online} img={img} size='small'/>
                </div>
                <div className='new-patient-info'>
                    <div className='new-patient-name'>{name}</div>
                    <div className='new-patient-age'>{age} лет</div>
                </div>
                {
                    !isSearchItem && <div className='new-patient-btn'>
                        <Button
                            btnText=''
                            onClick={(e) => this.onAddHandler(e)}
                            size='file'
                            type='file'
                            icon='add-button'
                            svg
                        />
                    </div>
                }
            </div>
        )
    }
}

AddNewPatientItem.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    age: PropTypes.string,
    img: PropTypes.string,
    online: PropTypes.bool,
    isSearchItem: PropTypes.bool,
    onAdd: PropTypes.func,
};

AddNewPatientItem.defaultProps = {
    id: 0,
    name: '',
    age: '',
    online: false,
    img: '',
    isSearchItem: false,
    onAdd: () => {},
};

export default AddNewPatientItem