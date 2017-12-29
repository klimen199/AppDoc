import React from 'react';
import PropTypes from 'prop-types'

import './styles.css'

class TextArea extends React.Component{

    render(){
        const {label} = this.props;

        return (
            <div className="textarea">
                <div className="textarea-label">{label}</div>
                <textarea className="textarea-field"/>
            </div>
        )
    }
}

TextArea.propTypes = {
    label: PropTypes.string,
};

TextArea.defaultProps = {
    label: '',
};

export default TextArea;