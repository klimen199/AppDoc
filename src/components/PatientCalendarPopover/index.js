import React from 'react';
import PropTypes from 'prop-types'
import moment from 'moment'
import Button from '../Button'

import Icon from '../Icon'
import './style.css'


const PatientCalendarPopover = (props) => {

  	const { appointmentNum, appointmentSpec, appointmentName, appointmentDate, appointmentType, appointmentText, appointmentTypeTitle, calendarItem } = props;

    return (
    	<div className='popover-calendar'>
			<div className='popover-calendar-title'>Приёмы</div>
			{calendarItem.map((item, index)=> 
				<div className='popover-calendar-item' key={index+1}>
					<div className='popover-calendar-num'><span>{index+1}</span></div>
					<div className='popover-calendar-block'>
						<a className='popover-calendar-speciality'>{item.appointmentSpec}</a>
						<a className='popover-calendar-name'>{item.appointmentName}</a>
						<div className='popover-calendar-info'>
							<div className='popover-calendar-date'>{item.appointmentDate}</div>
							<div className='popover-calendar-type'><Icon type={item.appointmentType} size={17} svg title={item.appointmentTypeTitle} /></div>
						</div>
						<div className='popover-calendar-text'>{item.appointmentText}</div>
					</div>
				</div>
			)}
		</div>
    );
};

PatientCalendarPopover.propTypes ={
    calendarItem: PropTypes.array,
};

PatientCalendarPopover.defaultProps = {
    calendarItem: [],
};

export default PatientCalendarPopover
