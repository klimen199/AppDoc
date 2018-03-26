import React from 'react';
import PropTypes from 'prop-types'

import PatientDoctorItem from '../PatientDoctorItem'
import Card from '../Card'
import Icon from '../Icon'

import './style.css'
import '../../icon/style.css'


class PatientDoctor extends React.Component{

    doctorRender = (dataArr) => {
        let doctorArr = [];

        dataArr.map((item,index) => {
            doctorArr.push(<PatientDoctorItem key={index} {...item}/>)
        });

        return doctorArr;
    }

    render(){
        const { data } = this.props;

        return (
            <div className='doctor-all'>
                <Card title="Мои врачи" extra={<div onClick={onGoto} className='go-to'><Icon svg type='people' size={18} /> Весь список</div>}>
                    {this.doctorRender(this.props.data)}
                </Card>
            </div>
        )
    }
}

PatientDoctor.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
};

PatientDoctor.defaultProps = {
    data: [],
};

export default PatientDoctor