import React from 'react';
import PropTypes from 'prop-types'
import Card from '../Card'
import NotificationItem from '../Notification'

import './style.css'


const NotificationCard = (props) => {

    const notificationRender = (dataArr) => {
        let notificationArr = [];
        dataArr.map((item, index) => {
            notificationArr.push(<NotificationItem {...item} 
                getId={props.getId} 
                key={item.id}/>)
        });
        return notificationArr;
    };

    
        return (
            <div className='notification-card'>
                <Card title="Уведомления">
                    {notificationRender(props.data)}
                </Card>
            </div>
        );
    
}

NotificationCard.propTypes ={
    data: PropTypes.arrayOf(PropTypes.object),
    getId: PropTypes.func,
}

NotificationCard.defaultProps = {
    data: [],
    getId: () => {},
}

export default NotificationCard
