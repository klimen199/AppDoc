import React from 'react';
import PropTypes from 'prop-types'
import PopoverBody from '../PopoverBody'

import { Popover } from 'antd';

import './style.css'

class PopoverApp extends React.Component {

	state = {
		visible: false,
	}

	handleVisibleChange = (visible) => {
		this.setState({ visible });
	}

  render() {
    return (
      <Popover
        content={<PopoverBody {...this.props.data}
                              onClose={() => this.setState({visible: false})}/>}
        trigger="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
        placement="rightTop"
      >
          {this.props.children}
      </Popover>
    );
  }
}


PopoverApp.propTypes = {
    data: PropTypes.object,
};

PopoverApp.defaultProps = {
    data: {},
};

export default PopoverApp
