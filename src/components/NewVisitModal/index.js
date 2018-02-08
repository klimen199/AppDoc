import React from 'react'
import PropTypes from 'prop-types'

import Modal from '../Modal'
import Content from './content'
import TextArea from '../TextArea'
import Button from '../Button'
import Radio from '../Radio'
import Select from '../Select'
import Icon from '../Icon'
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