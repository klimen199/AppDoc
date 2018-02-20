import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'
import moment from 'moment'
import Button from '../Button'
import Icon from '../Icon'
import DownloadLink from '../DownloadLink'

import './style.css'


const NotificationItem = (props) => {

    const {title, desc, date, time, thisTime, status} = props
    const rootClass = cn( 'notification-item' ,`notification-${status}`)

    return (
      <div className={rootClass}>
      		<div className='notification-icon'><Icon svg type='notification' size={20} /></div>
            <div className='notification-row'>
	            <div className='notification-title'>{title}</div>
	            <div className='notification-time'>
	                {thisTime}
	            </div>
            </div>
            <div className='notification-info'>{desc} {date} {time}</div>
            <div className='notification-links'>
				<DownloadLink
	                btnText="Прикрепленный файл с длинным предлинным названием.doc"
	                size="default" 
	                type="link"
	                download
	            />
	            <Button
                    size='file'
                    type='file'
                    icon='download'
                    iconSize={20}
                    svg
                    title='Скачать всё'
            	/>
            </div>   
        </div>
    );
}

NotificationItem.propTypes ={
	status: PropTypes.oneOf(['default', 'new']),
    title: PropTypes.string,
    time: PropTypes.string,
    thisTime: PropTypes.string,
    date: PropTypes.string,
    desc: PropTypes.string,
    start: PropTypes.instanceOf(Date),
}

NotificationItem.defaultProps = {
    title: '',
    time: '',
    status: 'default',
    thisTime: '',
    date: '',
    desc: '',
}

export default NotificationItem
