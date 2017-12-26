import React from 'react';
import PropTypes from 'prop-types'

import { Modal as AntModal } from 'antd';
import './styles.css'

class Modal extends React.Component{


    render(){
        const {visible, title} = this.props;

        return (
            <AntModal visible={visible}
                      title={title}
                      width={395}
                      footer={null}>
                {this.props.children}
            </AntModal>
        )
    }
}

Modal.propTypes = {
    visible: PropTypes.bool,
    title: PropTypes.string,
}

Modal.defaultProps = {
    visible: false,
    title: '',
}

export default Modal