import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import ProfileAvatar from '../ProfileAvatar'
import Card from '../Card'
import Button from '../Button'
import Icon from '../Icon'

import './style.css'
import '../../icon/style.css'

class ProfilePatient extends React.Component{

    render(){
        const {secondname, firstname, patronymic, img, status, lastDate, doctorType, doctor, birthday, age, height, weight} = this.props;
        const rootClass = cn('profile-patient');

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
                            <div className="patient__last-active">Последнее обращение: {lastDate} / {doctorType} {doctor}</div>
                            <div className="btn-row">
                                <Button
                                    btnText='записать на прием'
                                    size='default'
                                    type='float'
                                    icon='form'
                                    iconSize={12}
                                />

                                <Button
                                        btnText=''
                                        size='icon'
                                        type='light-blue'
                                        icon='mail'
                                        svg
                                        iconSize={16}
                                />
                                <Button className="btn-add"
                                        btnText=''
                                        size='file'
                                        type='file'
                                        icon='add-button'
                                        svg
                                        iconSize={28}
                                />
                            </div>
                      </div>

                      <div className="patient-info__more">
                            <div className="patient-row">
                                <span className="title">Дата рождения:</span>
                                <span className="text">{birthday}</span>
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
    lastDate: PropTypes.string,
    doctorType: PropTypes.string,
    doctor: PropTypes.string,
    birthday: PropTypes.string,
    age: PropTypes.number,
    height: PropTypes.number,
    weight: PropTypes.number
};

ProfilePatient.defaultProps = {
    secondname: '',
    firstname: '',
    patronymic: '',
    img: '',
    status: '',
    lastDate: '',
    doctorType: '',
    doctor: '',
    birthday: '',
    age: '',
    height: '',
    weight: ''
};

export default ProfilePatient