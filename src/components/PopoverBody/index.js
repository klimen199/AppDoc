import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'
import { action } from '@storybook/addon-actions';
import Icon from '../Icon'
import Button from '../Button'

import './style.css'


class PopoverBody extends React.Component {

	hide = () => {
		this.setState({
			visible: false,
		});
	}

  render() {
  	const {name, text, time, date} = this.props;

    return (
      <div className='calendar-body'>
			<a className='calendar-name'>{name}</a>
			<div className='calendar-date'>{date} 
				<Button 
					size='file'
					type='file'
					icon='telephone'
					svg
					iconSize={21}
				/>
			</div>

			<div className='calendar-time'>{time}</div>
			<div className='calendar-text'>{text}</div>

			<div className='calendar-block'>
				<Button 
					size='file'
					type='file'
					icon='mail'
					svg
					iconSize={16}
				/>
				<Button onClick={this.hide}
					size='file'
					type='file'
					icon='circle_close'
					svg
					iconSize={18}
				/>
			</div>
		</div>
    );
  }
}

PopoverBody.propTypes ={
    name: PropTypes.string,
    text: PropTypes.string,
    time: PropTypes.string,
    name: PropTypes.string,
}

PopoverBody.defaultProps = {
    name: '',
    text: '',
    time: '',
    date: '',
}

export default PopoverBody