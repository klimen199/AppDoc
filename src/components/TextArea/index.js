import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import './styles.css'

class TextArea extends React.Component{

    render(){
        const {label, className} = this.props;
        const clName = cn("textarea", className);

        return (
            <div className={clName}>
                <div className="textarea-label">{label}</div>
                <textarea className="textarea-field"/>
            </div>
        )
    }
}

TextArea.propTypes = {
    label: PropTypes.string,
    className: PropTypes.string,
};

TextArea.defaultProps = {
    label: '',
    className: '',
};

export default TextArea;