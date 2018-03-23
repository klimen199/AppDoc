import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import AddNewPatientItem from '../AddNewPatientItem'
import Modal from '../Modal'
import Button from '../Button'
import Input from '../Input'

import './styles.css'


class AddNewPatient extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            patients: props.data,
        }
    }
    

    patientsRender = (dataArr) => {
        let patientsArr = [];

        dataArr.map((item, index) => {
            patientsArr.push(<AddNewPatientItem {...item} 
                                                onAdd={this.props.onAdd} 
                                                key={item.id + ''+index}/>)
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
                        <Input.Search placeholder="Введите ФИО пациента" 
                                        onSearch={value => this.props.onSearch(value)}/>
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
    onAdd: PropTypes.func, 
    onSearch: PropTypes.func,
};

AddNewPatient.defaultProps = {
    data: [],
    visible: false,
    onCancel: () => {},
    onAdd: () => {},
    onSearch: () => {},
};

export default AddNewPatient;