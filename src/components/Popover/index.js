import React from 'react';
import PropTypes from 'prop-types'
import PopoverBody from '../PopoverBody'

import { Popover } from 'antd';

import './style.css'

class PopoverApp extends React.Component {

	state = {
		visible: false,
	};

	handleVisibleChange = (visible) => {
		this.setState({ visible });
	};

	handleClose = () => {
        this.props.onClose();
        this.setState({visible: false})
    };

	handleEmail = () => {
        this.props.onEmail();
        this.setState({visible: false})
    };

  render() {

    console.log(...this.props.data)
    console.log(this.props.data)

    return (
      <Popover
        content={<PopoverBody {...this.props.data}
                            events = {this.props.events}
                              isUser={this.props.isUser}
                              onClose={this.handleClose}
                              onEmail={this.handleEmail}
                              onGoto={this.props.onGoto}
        />}
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
    events: PropTypes.array,
    onClose: PropTypes.func,
    onEmail: PropTypes.func,
    onPhone: PropTypes.func,
    isUser: PropTypes.bool,
};

PopoverApp.defaultProps = {
    data: {},
    events: [],
    onClose: () => {},
    onEmail: () => {},
    onPhone: () => {},
    isUser: false,
};

export default PopoverApp
