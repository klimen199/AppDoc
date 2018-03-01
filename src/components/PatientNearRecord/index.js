import React from 'react';
import PropTypes from 'prop-types'

import PatientNearRecordItem from '../PatientNearRecordItem'
import Card from '../Card'
import Icon from '../Icon'

import './style.css'
import '../../icon/style.css'


class PatientNearRecord extends React.Component{

    nearRender = (dataArr) => {
        let nearArr = [];

        dataArr.map((item,index) => {
            nearArr.push(<PatientNearRecordItem key={index} {...item}/>)
        });

        return nearArr;
    }

    render(){
        const { data } = this.props;

        return (
            <div className='record-all'>
                <Card title="Ближайшие записи" extra={<a href="#"><Icon svg type='calendar' size={18} /> Все</a>}>
                {this.nearRender(this.props.data)}
                </Card>
            </div>
        )
    }
}

PatientNearRecord.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
};

PatientNearRecord.defaultProps = {
    data: [],
};

export default PatientNearRecord