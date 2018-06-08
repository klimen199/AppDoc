import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import Button from '../Button'
import Input from '../Input'
import Icon from '../Icon'
import SwitchPanel from '../SwitchPanel'
import NotificationApp from '../NotificationApp'
import AutoComplete from '../AutoComplete'

import './style.css'
import '../../icon/style.css'


const Header = (props) => {

    
        const {content,notifications} = props;

        return (
            <div className={'header'}>
                <div className='header-search'>
                    <AutoComplete
                        onAdd = {props.onAdd}
                        onGoto = {props.onGoto}
                        findName= {props.findName}
                        data={props.data}
                    />
                </div>
                <div className='header-call'>
                    <SwitchPanel 
                        icon='emergency-call'
                        title="Экстренные вызовы"
                    />
                </div>
                <div className='header-notification'>
                    <NotificationApp  data={notifications} getId={props.getNotifId}>
                         <Icon 
                            svg 
                            type='notification' 
                            size={20}
                            title='Уведомления'
                        />
                    </NotificationApp>
                </div>
                <div className='header-exit'>
                    <Button
                        btnText=''
                        size='icon'
                        type='icon'
                        icon='exit'
                        iconSize={20}
                        svg
                        title='Выход'
                        onClick={props.logout}
                    />
                </div>
            </div>
        )
}

Header.propTypes = {
    content: PropTypes.string,
    notifications: PropTypes.array,
    logout: PropTypes.func,

};

Header.defaultProps = {
    content: 'small',
    notifications: [],
    logout: () => {},
};

export default Header