import React from 'react'
import { Upload } from 'antd';

import Icon from '../Icon'

import './styles.css'

class UploadBig extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [],
  };

  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange = ({ fileList }) => this.setState({ fileList })

  render() {
    const { previewVisible, previewImage, fileList, name } = this.state;
    const uploadButton = (
      <div className='upload-btn' title='Загрузить файл'>
        <Icon type="add-button" size={40} svg/>
      </div>
    );
    return (
      <div className="upload">
        <Upload className="upload-block"
          action=""
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
          name={name}
        >
          {fileList.length >= 100 ? null : uploadButton}
        </Upload>
      </div>
    );
  }
}


export default UploadBig;