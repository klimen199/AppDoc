import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import NotificationApp from '../';

import {notificationArr} from './mock-data'

storiesOf('NotificationApp', module)
    .add('NotificationApp', () => (
        <div style={{ padding: '30px' }}>
            <NotificationApp  data={notificationArr}>
                <div style={{width:100, height: 100, backgroundColor: 'yellow'}}
                     onClick={() => notificationArr}>
                    asdasds
                </div>
            </NotificationApp>
        </div>
    ))