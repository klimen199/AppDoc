import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import AddNewPatientItem from '../AddNewPatientItem'
import Modal from '../Modal'
import Button from '../Button'
import Input from '../Input'

import './styles.css'


class AddNewPatient extends React.Component{

    patientsRender = (dataArr) => {
        let patientsArr = [];

        dataArr.map((item, index) => {
            patientsArr.push(<AddNewPatientItem {...item} key={item.id + ''+index}/>)
        });

        return patientsArr;
    };

    render(){

        const {visible, onCancel} = this.props;

        return (
            <Modal title='Добавление пациента в свой список'
                   visible={visible}
                   onCancel={onCancel}
                   width={560}
            >
                <div className='new-patient'>
                    <div className='new-patient-search'>
                        <Input.Search placeholder="Введите ФИО пациента" />
                    </div>
                    <div className='new-patient-title'>Результаты поиска</div>
                    <div className='new-patient-list'>
                        {this.patientsRender(this.props.data)}
                    </div>
                </div>
            </Modal>
        )

    }
}

AddNewPatient.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    visible: PropTypes.bool,
    onCancel: PropTypes.func,
};

AddNewPatient.defaultProps = {
    data: [],
    visible: false,
    onCancel: () => {},
};

export default AddNewPatient;