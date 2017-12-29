import React from 'react'
import PropTypes from 'prop-types'

import Modal from '../Modal'
import Icon from '../Icon'
import TextArea from '../TextArea'
import Upload from '../Upload'
import Button from '../Button'
import './styles.css'

class NewMessageModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dpNum: 1,
        }
    }

    render(){
        const {visible, userName} = this.props;

        return (
            <Modal title='Новое сообщение'
                   visible={visible}>
                <div className='newMessageModal'>
                    <div className="newMessageModal-user">
                        <div className="newMessageModal-user-icon">
                            <Icon type="user" size={24}/>
                        </div>
                        <div className="newMessageModal-user-name">
                            {userName}
                        </div>
                    </div>
                    <TextArea label='Текст сообщения' className="newMessageModal-txtarea"/>
                    <Upload className="newMessageModal-upload"/>

                    <Button size='default'
                            btnText='Отправить'
                            type='float'/>
                </div>
            </Modal>
        )
    }
}

NewMessageModal.propTypes = {
    visible: PropTypes.bool,
    userName: PropTypes.string,
};

NewMessageModal.defaultProps = {
    visible: false,
    userName: '',
};

export default NewMessageModal;