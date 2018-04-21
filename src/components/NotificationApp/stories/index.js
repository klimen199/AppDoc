import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import NotificationApp from '../';

import {notificationArr} from './mock-data'

storiesOf('NotificationApp', module)
    .add('NotificationApp', () => (
        <div style={{ padding: '30px', 'margin-left': '400px' }}>
            <NotificationApp  data={notificationArr} />
        </div>
    ))