import React from 'react'
import {Upload as AntUpload} from 'antd'

import Button from '../Button'
import './styles.css'

class Upload extends React.Component{

    render(){

        return (
            <AntUpload className="uploadContent">
                <Button size='icon'
                        type='float'
                        icon='upload'/>
                <span className="uploadContent-text">Прикрепить файл</span>
            </AntUpload>
        )
    }
}

export default Upload;