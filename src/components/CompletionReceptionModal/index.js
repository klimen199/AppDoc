import React from 'react'
import PropTypes from 'prop-types'

import Modal from '../Modal'
import Input from '../Input'
import Button from '../Button'
import Checkbox from '../Checkbox'
import './styles.css'

class CompletionReceptionModal extends React.Component{

    render(){
        const {visible, onClick} = this.props;

        const rootClass = 'completionReceptionModal';

        return (
            <Modal title='Завершение приема'
                   visible={visible}>
                <div className={rootClass}>
                    <Input className={rootClass+'-input'} placeholder="Диагноз"/>
                    <Checkbox className={rootClass+'-checkbox'}>Добавить в список хронических болезней</Checkbox>
                    <Button onClick={onClick}
                            btnText="Завершить"
                            size="default"
                            type="float"
                    />
                </div>
            </Modal>
        )
    }
}

CompletionReceptionModal.propTypes = {
    visible: PropTypes.bool,
    onClick: PropTypes.func,
};

CompletionReceptionModal.defaultProps = {
    visible: false,
    onClick: () => {},
};

export default CompletionReceptionModal;