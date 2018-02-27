import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'
import moment from 'moment'

import Button from '../Button'
import Rate from '../Rate'
import Icon from '../Icon'
import ProfileAvatar from '../ProfileAvatar'

import './style.css'
import '../../icon/style.css'

class ChatDialog extends React.Component{
    
    render(){
        const { name, consultation, size, time, online, img, status, iconType, isExtra} = this.props;

        let now = Date.now();
        console.log('time',time, Date(time));
        console.log('now',now, Date(now));
        console.log('diff',time - now);


        const d_status = time - Date.now() < 3600 ? 'soon' : 'default';

        const rootClass = isExtra ? cn('dialog-item',  `dialog-status-extra`) : cn('dialog-item',  `dialog-status-${d_status}`);


        return (
            <div className={rootClass}>
                <div className="flex-col" > 
                    <ProfileAvatar owner="patient" online={online} img={img} size={size}/>
                </div>
                <div className="flex-col">
                    <div className="dialog-item-name">
                        <a href="#">{name}</a>
                    </div>
                    <div className="dialog-item-consultation">{consultation}</div>
                </div>
                <div className="flex-col">
                    <div className='dialog-item-time'>
                        {moment(time).format('YYYY-MM-DD HH:mm')}
                    </div>
                    <Button className='dialog-item-extra' onClick={this.showModal}
                        size='file'
                        type='file'
                        svg
                        icon='emergency-call'
                        iconSize={25}
                    />
                    <Button className='dialog-item-type' onClick={this.showModal}
                        size='file'
                        type='file'
                        svg
                        icon={iconType}
                        iconSize={16}
                    />
                </div>
            </div>
        )
    }
}

ChatDialog.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    isExtra: PropTypes.bool,
    time: PropTypes.number,
    iconType: PropTypes.string
};

ChatDialog.defaultProps = {
    img: '',
    name: '',
    size: 'small',
    isExtra: false,
    time: '00:00',
    iconType: 'chat1',
};

export default ChatDialog