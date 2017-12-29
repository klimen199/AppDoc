import React from 'react'
import PropTypes from 'prop-types'
import {Upload as AntUpload} from 'antd'
import cn from 'classnames'

import Button from '../Button'
import './styles.css'

class Upload extends React.Component{

    render(){
        const {className, text} = this.props;
        const clName = cn("uploadContent", className);

        return (
            <AntUpload className={clName}>
                <Button size='icon'
                        type='float'
                        icon='upload'/>
                <span className="uploadContent-text">{text}</span>
            </AntUpload>
        )
    }
}

Upload.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
};

Upload.defaultProps = {
    className: '',
    text: 'Прикрепить файл',
};

export default Upload;