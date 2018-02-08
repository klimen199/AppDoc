import React from 'react'
import PropTypes from 'prop-types'

import Modal from '../Modal'
import Content from './content'
import './styles.css'

class NewVisitModal extends React.Component{
    render(){
        const {visible} = this.props;

        return (
            <Modal title='Запись на прием'
                   visible={visible}>
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
};

NewVisitModal.defaultProps = {
    visible: false,
    date: '',
    patients: [],
    onSave: () => {},
};

export default NewVisitModal;