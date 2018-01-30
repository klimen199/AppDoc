import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import NotificationItem from '../';

import {notificationArr} from './mock-data'

storiesOf('Notification', module)
    .add('default', () => (
        <div>
            <NotificationItem  
            	title="добавлена Новая запись"
            	date='26.11.2018'
            	time="15:50"
            	thisTime="10:50"
            	desc="Иванов Александр"
            />
        </div>
    ))
    .add('new', () => (
        <div>
            <NotificationItem 
            	status='new'
            	title="добавлена Новая запись"
            	date='26.11.2018'
            	time="15:50"
            	thisTime="10:50"
            	desc="Иванов Александр"
            />
        </div>
    ))