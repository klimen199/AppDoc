import React from 'react';
import PropTypes from 'prop-types'
import NotificationCard from '../NotificationCard'
import Notification from '../Notification'

import { Popover } from 'antd';

import './style.css'

class NotificationApp extends React.Component {

	state = {
		visible: false,
	}

	handleVisibleChange = (visible) => {
		this.setState({ visible });
	}

  render() {

    return (
      <Popover
          content={<NotificationCard {...this.props.data}
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


NotificationApp.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
};

NotificationApp.defaultProps = {
    data: [],
};

export default NotificationApp
