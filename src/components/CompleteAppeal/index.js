import React from 'react'
import PropTypes from 'prop-types'

import Modal from '../Modal'
import Button from '../Button'
//import './styles.css'

class CompleteAppealModal extends React.Component{

    render(){
        return (
            <Modal title='Завершение обращения'
                   visible={true}>
                <Button btnText="Запись"/>
                <br/>
                <Button btnText="Запись на прием"/>
            </Modal>
        )
    }
}

CompleteAppealModal.propTypes = {};

CompleteAppealModal.defaultProps = {};

export default CompleteAppealModal;