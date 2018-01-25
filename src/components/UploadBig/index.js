import React from 'react'
import PropTypes from 'prop-types'
import { Upload } from 'antd';
import cn from 'classnames'

import Icon from '../Icon'

import './styles.css'

class PicturesWall extends React.Component {
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
      <div className='upload-btn'>
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


export default PicturesWall;