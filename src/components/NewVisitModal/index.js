import React from 'react'
import PropTypes from 'prop-types'

import Modal from '../Modal'
import TextArea from '../TextArea'
import Upload from '../Upload'
import DatePicker from '../DatePicker'
import Button from '../Button'
import Radio from '../Radio'
import Select from '../Select'
import Icon from '../Icon'
import './styles.css'

class NewVisitModal extends React.Component{
    render(){
        const {visible, date, time} = this.props;

        return (
            <Modal title='Запись на прием'
                   visible={visible}>
                <div className='NewVisitModal'>
                    <div className='modal-row'>
                        <div className='modal-data'>
                            <Icon svg type='calendar' size={26} />
                            <div className='modal-result'>{date}</div>
                        </div>
                        <div className='modal-time'>
                            <Icon svg type='alarm' size={26} />
                            <div className='modal-result'>{time}</div>
                        </div>
                    </div>
                    <Select defaultValue="ФИО">
                      <Option value="5 мин">5 мин</Option>
                      <Option value="10 мин">10 мин</Option>
                      <Option value="15 мин">15 мин</Option>
                    </Select>
                    <TextArea label='Комментарий к приему'
                              className="NewVisitModal-txtarea"/>
                    <Radio icons={['telephone', "video-camera", 'chat1']}/>
                    <Button size='default'
                            btnText='Сохранить'
                            type='float'/>
                </div>
            </Modal>
        )
    }
}

NewVisitModal.propTypes = {
    visible: PropTypes.bool,
    date: PropTypes.string,
    time: PropTypes.string,
};

NewVisitModal.defaultProps = {
    visible: false,
    date: '',
    time: '',
};

export default NewVisitModal;