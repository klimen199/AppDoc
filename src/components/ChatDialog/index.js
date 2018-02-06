import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import Button from '../Button'
import Rate from '../Rate'
import Icon from '../Icon'
import ProfileAvatar from '../ProfileAvatar'

import './style.css'
import '../../icon/style.css'

class ChatDialog extends React.Component{
    render(){
        const { name, consultation, size, time, online, img, status, iconType} = this.props;
        const rootClass = cn('dialog-item',  `dialog-status-${status}`);


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
                    <div className='dialog-item-time'>{time}</div>
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
    status: PropTypes.oneOf(['extra', 'default', 'soon']),
    time: PropTypes.string,
    iconType: PropTypes.string
};

ChatDialog.defaultProps = {
    img: '',
    name: '',
    size: 'small',
    status: 'default',
    time: '00:00',
    iconType: 'chat1',
};

export default ChatDialog