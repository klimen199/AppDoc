import React from 'react';
import PropTypes from 'prop-types'
import PopoverFileBody from '../PopoverFileBody'
import Link from '../Links'
import Button from '../Button'

import { Popover } from 'antd';

import './style.css'

class PopoverFile extends React.Component {

  filesRender = (dataArr) => {
      let filesArr = [];

      dataArr.map((item, index) => { 
          filesArr.push(<Link {...item} size="default" type="link" svg icon="file" iconSize={16} download  key={item.id + ''+index}/>)
      });

      return filesArr;
  };

	state = {
		visible: false,
	};

	handleVisibleChange = (visible) => {
		this.setState({ visible });
	};

  render() {

    const {num} = this.props;

    return (
      <Popover 
        content={
          <div className='popover-file-body'>
          <div className='popover-file-block'>
            {this.filesRender(this.props.data)}
          </div>
          <Button
            size='file'
            type='file'
            icon='download'
            title='Отменить приём'
            title='Скачать все'
            svg
            iconSize={23}
          />
      </div>}
        trigger="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
        placement="bottomRight"
      >
          <div className='popover-btn'>
            {this.props.children}
            <Button onClick={() => filesArr}
                btnText=''
                size='icon'
                type='icon'
                icon='file-download'
                svg
                iconSize={32}
            />
          </div>
      </Popover>
    );
  }
}


PopoverFile.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    num: PropTypes.string,
};

PopoverFile.defaultProps = {
    data: [],
    num: '0'
};

export default PopoverFile
