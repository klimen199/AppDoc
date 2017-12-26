import React from 'react';
import PropTypes from 'prop-types'

import './styles.css'

class TextArea extends React.Component{

    render(){

        return (
            <div className="textarea">
                <div className="textarea-label">Текст сообщения</div>
                <textarea className="textarea-field"/>
            </div>
        )
    }
}

TextArea.propTypes = {};

TextArea.defaultProps = {};

export default TextArea;