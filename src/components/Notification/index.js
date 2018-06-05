import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'
import moment from 'moment'
import Button from '../Button'
import Icon from '../Icon'
import DownloadLink from '../DownloadLink'
import Hoc from '../Hoc'

import './style.css'

const NotificationItem = (props) => {

    let renderLinks = () =>{
        return (
            <div className='notification-links'
                onClick = {e => {
                    e.stopPropagation();
                    e.nativeEvent.stopImmediatePropagation();
                }}
            >
                {props.file.map((el,i) => {
                    return (<DownloadLink
                        key={i}
                        btnText={el.btnText ? el.btnText : "undefined name"}
                        href = {el.href ? el.href : ""}
                        size="default"
                        type="link"
                        download
                    />)
                })}
                <Button
                    size='file'
                    type='file'
                    icon='download'
                    iconSize={20}
                    svg
                    title='Скачать всё'
                />
            </div>
        );
    };

    const {id, title, desc, time, thisTime, status, watch, getId} = props;
    let iconType = 'notification';
    let links;

    switch (status) {
        case 'research':
            iconType = 'order-form';
        case 'cancel':
            links = renderLinks();
            break;
    }

    let rootClass = (!watch) ? cn( `notification-item` ,`notification-${status}`) : cn( `notification-item` ,`notification-watch`);

    return (
                <div className={rootClass} 
                    onClick={(!watch) && (() => {getId(id)})}
                >
                    <div className='notification-icon'>
                        <Icon svg type={iconType} size={20} />
                    </div>
                    <div className='notification-row'>
                        <div className='notification-title'>{title} {time ? `- ${moment((+time)*1000).format('HH:mm')}` : ''}</div>
                        <div className='notification-time'>{moment((+thisTime)*1000).format('HH:mm')}</div>
                    </div>
                    <div className='notification-info'>{desc} {moment((+time)*1000).format('DD.MM.YYYY HH:mm')}</div>
                    {links}
                </div>
    );
}

NotificationItem.propTypes ={
	status: PropTypes.oneOf(['new', 'cancel','research','five','tomorrow', 'negative', 'call','default']),
    title: PropTypes.string,
    time: PropTypes.string,
    thisTime: PropTypes.string,
    desc: PropTypes.string,
    watch: PropTypes.bool, // просмотрена запись - да(true)
    file: PropTypes.array,
    getId: PropTypes.func,
}

NotificationItem.defaultProps = {
    id: 0,
    title: '',
    time: '',
    status: 'default',
    thisTime: '',
    desc: '',
    watch: false,
    file: [],
    getId: () => {},
}

export default NotificationItem
