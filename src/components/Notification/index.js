import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'
import moment from 'moment'
import Button from '../Button'
import Icon from '../Icon'
import DownloadLink from '../DownloadLink'

import './style.css'


const NotificationItem = (props) => {

    let renderType1 = () =>{
        return (
            <div>
                <div className='notification-icon'><Icon svg type='notification' size={20} /></div>
                <div className='notification-row'>
                    <div className='notification-title'>{title}</div>
                    <div className='notification-time'>
                        {thisTime}
                    </div>
                </div>
                <div className='notification-info'>{desc} {date} {time}</div>
            </div>
        );
    };

    let renderType2 = () =>{
        return (
            <div>
                <div className='notification-icon'> <Icon svg type='order-form' size={20} /></div>
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
    };

    let renderType3 = () =>{
        return (
            <div>
                <div className='notification-icon'><Icon svg type='notification' size={20} /></div>
                <div className='notification-row'>
                    <div className='notification-title'>{title}</div>
                    <div className='notification-time'>
                        {thisTime}
                    </div>
                </div>
                <div className='notification-info'>{desc} {date} {time}</div>
            </div>
        );
    };

    let renderType4 = () =>{
        return (
            <div>
                <div className='notification-icon'><Icon svg type='notification' size={20} /></div>
                <div className='notification-row'>
                    <div className='notification-title'>{title} {time}</div>
                    <div className='notification-time'>
                        {thisTime}
                    </div>
                </div>
                <div className='notification-info'>{desc} {date} {time}</div>
            </div>
        );
    };

    let renderType5 = () =>{
        return (
            <div>
                <div className='notification-icon'><Icon svg type='notification' size={20} /></div>
                <div className='notification-row'>
                    <div className='notification-title'>{title} {time}</div>
                    <div className='notification-time'>
                        {thisTime}
                    </div>
                </div>
                <div className='notification-info'>{desc} {date} {time}</div>
            </div>
        );
    };

    let renderType6 = () =>{
        return (
            <div>
                <div className='notification-icon'><Icon svg type='notification' size={20} /></div>
                <div className='notification-row'>
                    <div className='notification-title'>Внимание! {title}</div>
                    <div className='notification-time'>
                        {thisTime}
                    </div>
                </div>
                <div className='notification-info'>{desc} {date} {time}</div>
            </div>
        );
    };

    const {title, desc, date, time, thisTime, status, watch} = props;
    let addClass = '';
    let renderType = renderType1();
    switch (status) {
        case 'new':
            addClass = `new`;
            //renderType = renderType1();
            break;
        case 'cancel':
            addClass = `cancel`;
            //renderType = renderType1();
            break;
        case 'research':
            addClass = `research`;
            renderType = renderType2();
            break;
        case 'five':
            addClass = `five`;
            renderType = renderType3();
            break;
        case 'tomorrow':
            addClass = `tomorrow`;
            renderType = renderType4();
            break;
        case 'negative':
            addClass = `negative`;
            renderType = renderType5();
            break;
        case 'call':
            addClass = `call`;
            renderType = renderType6();
            break;

    }

    let rootClass = null;
    if(!watch)
        rootClass =  cn( `notification-item` ,`notification-${addClass}`);
    else {
        rootClass = cn( `notification-item` ,`notification-watch`);
    }

    return (
                <div className={rootClass}>
                    {renderType}
                </div>

    );
}

NotificationItem.propTypes ={
	status: PropTypes.oneOf(['new', 'cancel',
        'research','five','tomorrow', 'negative', 'call']),
    title: PropTypes.string,
    time: PropTypes.string,
    thisTime: PropTypes.string,
    date: PropTypes.string,
    desc: PropTypes.string,
    start: PropTypes.instanceOf(Date),
    watch: PropTypes.bool, // просмотрена запись - да(true)
}

NotificationItem.defaultProps = {
    title: '',
    time: '',
    status: 'default',
    thisTime: '',
    date: '',
    desc: '',
    watch: false,
}

export default NotificationItem
