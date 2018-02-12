import React from 'react'
import PropTypes from 'prop-types'

import Modal from '../Modal'
import Content from './content'
import './styles.css'

class NewVisitModal extends React.Component{
    render(){
        const {visible, onCancel} = this.props;

        return (
            <Modal title='Запись на прием'
                   visible={visible}
                   onCancel={onCancel}
            >
                <Content {...this.props}/>
            </Modal>
        )
    }
}

NewVisitModal.propTypes = {
    visible: PropTypes.bool,
    date: PropTypes.instanceOf(Date),
    patients: PropTypes.array,
    onSave: PropTypes.func,
    onCancel: PropTypes.func,
};

NewVisitModal.defaultProps = {
    visible: false,
    date: null,
    patients: [],
    onSave: () => {},
    onCancel: () => {},
};

export default NewVisitModal;