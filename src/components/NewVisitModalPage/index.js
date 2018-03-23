import React from 'react'
import PropTypes from 'prop-types'

import Modal from '../Modal'
import Content from './content'
import './styles.css'

const NewVisitModalPage = (props) => {

        const {visible, onCancel} = props;

        return (
            <Modal title='Запись на прием'
                   visible={visible}
                   onCancel={onCancel}
            >
                <Content {...props}/>
            </Modal>
        )

}

NewVisitModalPage.propTypes = {
    visible: PropTypes.bool,
    date: PropTypes.instanceOf(Date),
    patients: PropTypes.array,
    userName: PropTypes.string,
    onSave: PropTypes.func,
    onCancel: PropTypes.func,
};

NewVisitModalPage.defaultProps = {
    visible: false,
    date: null,
    patients: [],
    userName: '',
    onSave: () => {},
    onCancel: () => {},
};

export default NewVisitModalPage;