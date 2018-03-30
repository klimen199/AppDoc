import React from 'react';
import PropTypes from 'prop-types'
import moment from 'moment'
import Button from '../Button'

import './style.css'


const PopoverBody = (props) => {

  	const {fio, comment, start, end, onEmail, onGoto} = props;

    return (
      <div className='calendar-body'>
			<div onClick={() => onGoto(fio)} className='go-to calendar-name'>{fio}</div>
			<div className='calendar-date'>
				{moment(start).format('DD MMMM')}
				<Button
					size='file'
					type='file'
					icon='telephone'
					svg
					iconSize={21}
					onClick={props.onPhone}
				/>
			</div>

			<div className='calendar-time'>
				{moment(start).format('HH mm')} - {moment(end).format('HH mm')}
				</div>
			<div className='calendar-text'>{comment}</div>

			<div className='calendar-block'>
				<Button
					size='file'
					type='file'
					icon='mail'
					title='Отправить сообщение'
					svg
					iconSize={16}
					onClick={onEmail}
				/>
				<Button
					onClick={props.onClose}
					size='file'
					type='file'
					icon='circle_close'
					title='Отменить приём'
					svg
					iconSize={18}
				/>
			</div>
		</div>
    );
};

PopoverBody.propTypes ={
    fio: PropTypes.string,
    comment: PropTypes.string,
    start: PropTypes.instanceOf(Date),
    end: PropTypes.instanceOf(Date),
    onGoto: PropTypes.func,
};

PopoverBody.defaultProps = {
    fio: '',
    comment: '',
    start: null,
    end: null,
    onGoto: () => {},
};

export default PopoverBody
