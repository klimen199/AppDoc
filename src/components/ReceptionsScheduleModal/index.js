import React from 'react'
import PropTypes from 'prop-types'

import Modal from '../Modal'
import Icon from '../Icon'
import TextArea from '../TextArea'
import Upload from '../Upload'
import Button from '../Button'
import './styles.css'

class ReceptionsScheduleModal extends React.Component{

    render(){
        const {visible} = this.props;

        return (
            <Modal title='Новое сообщение'
                   visible={visible}>
            </Modal>
        )
    }
}

ReceptionsScheduleModal.propTypes = {
    visible: PropTypes.bool,
};

ReceptionsScheduleModal.defaultProps = {
    visible: false,
};

export default ReceptionsScheduleModal;