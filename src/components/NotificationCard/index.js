import React from 'react';
import PropTypes from 'prop-types'
import Card from '../Card'
import NotificationItem from '../Notification'

import './style.css'


class NotificationCard extends React.Component{

    notificationRender = (dataArr) => {
        let notificationArr = [];

        dataArr.map((item, index) => {
            notificationArr.push(<NotificationItem {...item} key={item.id + ''+index}/>)
        });

        return notificationArr;
    };

    render(){
        console.log('NotificationCard', this.props.data)
        return (
            <div className='notification-card'>
                <Card title="Уведомления">
                    {this.notificationRender(this.props.data)}
                </Card>
            </div>
        );
    }
}

NotificationCard.propTypes ={
    data: PropTypes.arrayOf(PropTypes.object),
}

NotificationCard.defaultProps = {
    data: [],
}

export default NotificationCard
