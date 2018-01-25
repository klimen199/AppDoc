import React from 'react';
import PropTypes from 'prop-types'
import Button from '../Button'

import './style.css'


class PopoverBody extends React.Component {

  render() {
  	const {name, text, time, date, onEmail} = this.props;

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
					onClick={this.props.onPhone}
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
					onClick={onEmail}
				/>
				<Button
					onClick={this.props.onClose}
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
    date: PropTypes.string,
    onPhone: PropTypes.func,
    onEmail: PropTypes.func,
}

PopoverBody.defaultProps = {
    name: '',
    text: '',
    time: '',
    date: '',
    onPhone: () => {},
    onEmail: () => {},}

export default PopoverBody
