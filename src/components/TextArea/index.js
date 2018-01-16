import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import './styles.css'

class TextArea extends React.Component{

    render(){
        const {label, className, placeholder} = this.props;
        const clName = cn("textarea", className);

        return (
            <div className={clName}>
                {label && <div className="textarea-label">{label}</div>}
                <textarea className="textarea-field"
                          placeholder={placeholder}
                          value={this.props.value}
                          onChange={e => this.props.onChange(e.target.value)}/>
            </div>
        )
    }
}

TextArea.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
};

TextArea.defaultProps = {
    label: '',
    value: '',
    className: '',
    placeholder: '',
    onChange: () => {},
};

export default TextArea;