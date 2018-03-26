import React from 'react';
import PropTypes from 'prop-types'
import moment from 'moment'
import Button from '../Button'

import Icon from '../Icon'
import './style.css'


const PatientCalendarPopover = (props) => {

  	const { appointmentNum, appointmentSpec, appointmentName, appointmentDate, appointmentType, appointmentText, appointmentTypeTitle, calendarItem, onGoto, onGotoName} = props;

    return (
    	<div className='popover-calendar'>
			<div className='popover-calendar-title'>Приёмы</div>
			{calendarItem.map((item, index)=> 
				<div className='popover-calendar-item' key={index+1}>
					<div className='popover-calendar-num'><span>{index+1}</span></div>
					<div className='popover-calendar-block'>
						<div onClick={onGoto} className='popover-calendar-speciality'>{item.appointmentSpec}</div>
						<div onClick={onGotoName} className='popover-calendar-name'>{item.appointmentName}</div>
						<div className='popover-calendar-info'>
							<div className='popover-calendar-date go-to'>{item.appointmentDate}</div>
							<div className='popover-calendar-type go-to'><Icon type={item.appointmentType} size={17} svg title={item.appointmentTypeTitle} /></div>
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
    onGoto: PropTypes.func,
    onGotoName: PropTypes.func,
};

PatientCalendarPopover.defaultProps = {
    calendarItem: [],
    onGoto: () => {},
    onGotoName: () => {},
};

export default PatientCalendarPopover