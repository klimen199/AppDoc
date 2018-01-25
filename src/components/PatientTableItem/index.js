import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import Button from '../Button'
import Rate from '../Rate'
import Icon from '../Icon'
import Popover from '../Popover'
import ProfileAvatar from '../ProfileAvatar'
import NewMessageModal from '../NewMessageModal'

import './style.css'
import '../../icon/style.css'

class PatientTableItem extends React.Component{
    state = {
        visible: false,
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        this.setState({
            visible: false,
        });
    }
    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
    }

    render(){
        const { name, age, size, time, date, online, img} = this.props;
        const rootClass = cn('patient-item');


        return (
            <div className={rootClass}>
                <div className="flex-col"><ProfileAvatar owner="patient" online={online} img={img} size={size}/></div>
                <div className="flex-col">
                    <div className="patient-item-name"><a href="#">{name}</a></div>
                    <div className="patient-item-age">{age} лет</div>
                </div>
                <div className="flex-col">
                    <div className="patient-item-title">Последний приём:</div>
                    <div className="patient-item-time">{date} {time}</div>
                </div>
                <div className="flex-col">
                    <Button onClick={this.showModal}
                        btnText='записать на прием'
                        size='default'
                        type='float'
                        icon='form'
                        iconSize={12}
                    />
                </div>
                <div className="flex-col">
                    <Button onClick={this.showModal}
                        size='file'
                        type='file'
                        icon='mail'
                        iconSize={16}
                    />
                </div>
                <div className="flex-col">
                    <Button
                        size='file'
                        type='file'
                        icon='empty'
                        iconSize={24}
                    />
                </div>
                <NewMessageModal 
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    userName={name}
                />
            </div>
        )
    }
}

PatientTableItem.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string
};

PatientTableItem.defaultProps = {
    img: '',
    name: '',
    size: 'small',
    date: '01.01.2018',
    time: '00:00',
};

export default PatientTableItem