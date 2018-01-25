import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'
import { action } from '@storybook/addon-actions';
import PopoverBody from '../PopoverBody'
import Card from '../Card'
import Button from '../Button'
import Icon from '../Icon'

import { Popover } from 'antd';

import './style.css'

class PopoverApp extends React.Component {
	popoverRender = (dataArr) => {
        let popoverArr = [];

        dataArr.map((item) => {
            popoverArr.push(<PopoverBody {...item}/>)
        });

        return popoverArr;
    };

	state = {
		visible: false,
	}

	hide = () => {
		this.setState({
			visible: false,
		});
	}

	handleVisibleChange = (visible) => {
		this.setState({ visible });
	}

  render() {
    return (
      <Popover
        content={this.popoverRender(this.props.data)}
        trigger="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
        placement="rightTop"
      >
        <Button type="primary">Click me</Button>
      </Popover>
    );
  }
}


PopoverApp.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
};

PopoverApp.defaultProps = {
    data: [],
};

export default PopoverApp