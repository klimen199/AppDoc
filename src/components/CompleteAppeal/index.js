import React from 'react'
import PropTypes from 'prop-types'

import Modal from '../Modal'
import Button from '../Button'
import './styles.css'

class CompleteAppealModal extends React.Component{

    render(){
        const {visible} = this.props;

        return (
            <Modal title='Завершение обращения'
                   visible={visible}>
                <div className='completeAppealModal'>
                    <Button btnText="Добавить" size='default' type='float' icon='form'/>
                    <br/>
                    <Button btnText="Завершить обращение" size='default' type='yellow'/>
                </div>
            </Modal>
        )
    }
}

CompleteAppealModal.propTypes = {
    visible: PropTypes.bool,
};

CompleteAppealModal.defaultProps = {
    visible: false,
};

export default CompleteAppealModal;