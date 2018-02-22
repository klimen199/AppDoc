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
            <AntUpload className={clName} onChange={e => this.props.onChange(e)}>
                <Button btnText={text}
                        size='upload'
                        type='upload'
                        icon='upload'
                        iconSize={36}
                        svg
                        onClick={e => e.preventDefault()}
                        />
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
    text: '',
};

export default Upload;