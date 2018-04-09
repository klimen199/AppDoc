import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'
import moment from 'moment'

import Button from '../Button'
import Rate from '../Rate'
import Icon from '../Icon'
import Popover from '../Popover'
import ProfileAvatar from '../ProfileAvatar'
import NewVisitModalPage from '../NewVisitModalPage'
import NewMessageModal from '../NewMessageModal'

import './style.css'
import '../../icon/style.css'

class PatientTableItem extends React.Component{
    state = {
        modal1Visible: false,
        modal2Visible: false,
    }

    setModal1Visible(modal1Visible) {
        this.setState({ modal1Visible });
    }
    setModal2Visible(modal2Visible) {
        this.setState({ modal2Visible });
    }


    render(){
        const { id, name, age, size, time, date, online, avatar, onGoto, dateend, datestart} = this.props;
        const rootClass = cn('patient-item');
        
        return (
            <div className={rootClass}>
                <div className="flex-col"><ProfileAvatar owner="patient" online={online} img={avatar} size={size}/></div>
                <div className="flex-col">
                    <div className="patient-item-name">
                        <div onClick={() => onGoto(id)} className='go-to'>{name}</div>
                    </div>
                    <div className="patient-item-age">{age} лет</div>
                </div>
                <div className="flex-col">
                    <div className="patient-item-title">Последний приём:</div>
                    <div className="patient-item-time">
                        {moment.unix(datestart).format('DD.MM.YYYY')} 
                        <br/>
                        {moment.unix(datestart).format('HH:mm')}
                        -
                        {moment.unix(dateend).format('HH:mm')}                        
                    </div>
                </div>
                <div className="flex-col">
                    <Button onClick={() => this.setModal1Visible(true)}
                        btnText='записать на прием'
                        size='default'
                        type='float'
                        icon='form'
                        iconSize={12}
                    />
                </div>
                <div className="flex-col">
                    <Button onClick={(e) => {
                            e.preventDefault();
                            this.setModal2Visible(true)
                        }}
                        size='file'
                        type='file'
                        icon='mail'
                        iconSize={16}
                        title='Новое сообщение'
                    />
                </div>
                <div className="flex-col">
                    <Button
                        size='file'
                        type='file'
                        icon='empty'
                        iconSize={24}
                        title='Удалить пациента'
                        onClick = {() => this.props.onDelete(this.props.id)}
                    />
                </div>
                <NewMessageModal 
                    visible={this.state.modal2Visible}
                    onSend={(a) => {
                        this.setModal2Visible(false);
                        console.log(a)
                        this.props.onNewMessage(a)
                    }}
                    onCancel={() => this.setModal2Visible(false)}
                    userName={name}
                    id={this.props.id}
                />
                <NewVisitModalPage 
                    visible={this.state.modal1Visible}
                    onSave={(a) => {
                        this.setModal1Visible(false);
                        this.props.onNewVisit(a)
                    }}
                    onCancel={() => this.setModal1Visible(false)}
                    userName={name}
                    id={id}
                    date={new Date(2018,1,4,8,10)}
                />
            </div>
        )
    }
}

PatientTableItem.propTypes = {
    id: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string,

    onNewVisit: PropTypes.func,
    onNewMessage: PropTypes.func,
    onDelete: PropTypes.func,
    onGoto: PropTypes.func,
};

PatientTableItem.defaultProps = {
    id: 0,
    avatar: '',
    name: '',
    size: 'small',

    onNewVisit: () => {},
    onNewMessage: () => {},
    onDelete: () => {},
    onGoto: () => {},
};

export default PatientTableItem