import React from 'react';
import PropTypes from 'prop-types'

import { Modal as AntModal } from 'antd';
import Icon from '../Icon'
import './styles.css'

class Modal extends React.Component{


    render(){
        const {visible, title, warning} = this.props;
        

        return (
            <AntModal visible={visible}
                      title={title}
                      width={395}
                      footer={null}
                      className = {warning ? 'warning' : ''}
                      closable = {!warning}>
                {warning && <Icon type="caution" svg size={24}/>}
                {this.props.children}
            </AntModal>
        )
    }
}

Modal.propTypes = {
    visible: PropTypes.bool,
    title: PropTypes.string,
    warning: PropTypes.bool,
};

Modal.defaultProps = {
    visible: false,
    title: '',
    warning: false,
};

export default Modal