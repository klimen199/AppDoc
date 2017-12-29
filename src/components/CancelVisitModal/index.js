import React from 'react'
import PropTypes from 'prop-types'

import Modal from '../Modal'
import Icon from '../Icon'
import TextArea from '../TextArea'
import './styles.css'

class CancelVisitModal extends React.Component{

    render(){
        const {visible, userName} = this.props;

        return (
            <Modal title='Отмена приема'
                   visible={visible}>
                <div className='cancelVisitModal'>
                    <div className="cancelVisitModal-user">
                        <div className="cancelVisitModal-user-icon">
                            <Icon type="user" size={24}/>
                        </div>
                        <div className="cancelVisitModal-user-name">
                            {userName}
                        </div>
                    </div>
                    <TextArea label='Текст сообщения'/>
                </div>
            </Modal>
        )
    }
}

CancelVisitModal.propTypes = {
    visible: PropTypes.bool,
    userName: PropTypes.string,
};

CancelVisitModal.defaultProps = {
    visible: false,
    userName: '',
};

export default CancelVisitModal;