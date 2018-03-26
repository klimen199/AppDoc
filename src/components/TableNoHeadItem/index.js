import React from 'react';
import PropTypes from 'prop-types'
import moment from 'moment'

import ProfileAvatar from '../ProfileAvatar'
import Button from '../Button'
import Icon from '../Icon'

import './style.css'
import '../../icon/style.css'

class TableNoHeadItem extends React.Component{

    onBeginHandler = (e) => {
        e.preventDefault();
        this.props.onBegin();
    }

    onCancelHandler = (e) => {
        e.preventDefault();
        this.props.onCancel();
    }

    render(){
        const {img, type, name, infoText, size, online, title, time, id_p, onGoto} = this.props;

        return (
            <div className='schedule'>
                <ProfileAvatar owner="patient" online={online} img={img} size={size}/>
                <div className="flex-col">
                    <div className="patient-name"><div onClick={onGoto} className='go-to'>{name}</div></div>
                    <div className="patient-info">{infoText}</div>
                </div>
                <div className="flex-col ml-a">
                    <div className="patient-time">{moment(time).format('HH:mm')}</div>
                </div>
                <div className="flex-col"><Icon svg type={type} size={16} title='title'/></div>
                <div className="flex-col">
                    <Button
                        onClick={this.onBeginHandler}
                        btnText='Начать прием'
                        size='default'
                        type='float'
                    />
                </div>
                <div className="flex-col" onClick={this.onCancelHandler}><a href="#">Отменить</a></div>
            </div>
        )
    }
}

TableNoHeadItem.propTypes = {
    id_p: PropTypes.number,
    img: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string.isRequired,
    infoText: PropTypes.string,
    title: PropTypes.string,
    time: PropTypes.number,
    specialty: PropTypes.string,
    rateValue: PropTypes.string,
    timesRated: PropTypes.string,
    onBegin: PropTypes.func,
    onCancel: PropTypes.func,
    onGoto: PropTypes.func,
};

TableNoHeadItem.defaultProps = {
    id_p: 0,
    img: '',
    name: '',
    title: 0,
    size: 'small',
    infoText: '',
    time: '00:00',
    onBegin: () => {},
    onCancel: () => {},
    onGoto: () => {},
};

export default TableNoHeadItem