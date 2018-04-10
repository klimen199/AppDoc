import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'
import moment from 'moment'

import ProfileAvatar from '../ProfileAvatar'
import Card from '../Card'
import Button from '../Button'
import Icon from '../Icon'
import NewMessageModal from '../NewMessageModal'
import NewVisitModalPage from '../NewVisitModalPage'

import './style.css'
import '../../icon/style.css'

class ProfilePatient extends React.Component{
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
        const {secondname, firstname, patronymic, img, status, lastDate, doctorType, doctor, birthday, age, height, weight} = this.props;
        const rootClass = cn('profile-patient');
        const fioPatient = cn(`${secondname}`, `${firstname}`, `${patronymic}`);

        return (
            <div className={rootClass}>
                <Card title="Общая информация" className="patient-card">
                    <ProfileAvatar 
                      img={img}
                      owner='patient'
                      size="large"
                      online={status}
                      />

                      <div className="patient-info">
                            <div className="patient-name">{secondname}<br/>{firstname} {patronymic}</div>
                            <div className="patient__last-active">Последнее обращение: {moment((+lastDate)*1000).format('DD.MM.YYYY')} / {doctorType} {doctor}</div>
                            <div className="btn-row">
                                <Button onClick={() => this.setModal1Visible(true)}
                                    btnText='записать на прием'
                                    size='default'
                                    type='float'
                                    icon='form'
                                    iconSize={12}
                                />

                                <Button onClick={() => this.setModal2Visible(true)}
                                        btnText=''
                                        size='icon'
                                        type='light-blue'
                                        icon='mail'
                                        svg
                                        iconSize={16}
                                        title='Отправить сообщение'
                                />
                                <Button 
                                        className="btn-add"
                                        btnText=''
                                        size='file'
                                        type='file'
                                        icon='add-button'
                                        svg
                                        title='Добавть в мои пациенты'
                                        iconSize={28}
                                />
                            </div>
                      </div>

                      <div className="patient-info__more">
                            <div className="patient-row">
                                <span className="title">Дата рождения:</span>
                                <span className="text">{moment((+birthday)*1000).format('DD.MM.YYYY')}</span>
                            </div>
                            <div className="patient-row">
                                <span className="title">Возраст:</span>
                                <span className="text">{age}</span>
                            </div>
                            <div className="patient-row">
                                <span className="title">Рост:</span>
                                <span className="text">{height} см</span>
                            </div>
                            <div className="patient-row">
                                <span className="title">Вес:</span>
                                <span className="text">{weight} кг</span>
                            </div>
                      </div>
                </Card>

                <NewMessageModal 
                    visible={this.state.modal2Visible}
                    onOk={() => this.setModal2Visible(false)}
                    onCancel={() => this.setModal2Visible(false)}
                    userName={fioPatient}
                />

                <NewVisitModalPage 
                    visible={this.state.modal1Visible}
                    onOk={() => this.setModal1Visible(false)}
                    onCancel={() => this.setModal1Visible(false)}
                    userName={fioPatient}
                    date={new Date(2018,1,4,8,10)}
                    onSave = {(obj) => console.log(obj)}
                />
            </div>
        )
    }
}

ProfilePatient.propTypes = { 
    secondname: PropTypes.string,
    firstname: PropTypes.string,
    patronymic: PropTypes.string,
    img: PropTypes.string,
    status: PropTypes.string,
    lastDate: PropTypes.number,
    doctorType: PropTypes.string,
    doctor: PropTypes.string,
    birthday: PropTypes.number,
    age: PropTypes.string,
    height: PropTypes.string,
    weight: PropTypes.string
};

ProfilePatient.defaultProps = {
    secondname: '',
    firstname: '',
    patronymic: '',
    img: '',
    status: '',
    lastDate: 0,
    doctorType: '',
    doctor: '',
    birthday: 0,
    age: '',
    height: '',
    weight: ''
};

export default ProfilePatient