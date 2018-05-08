import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import NotificationApp from '../';

import {notificationArr} from './mock-data'

storiesOf('NotificationApp', module)
    .add('NotificationApp', () => (
        <div>
            <div style={{ width: '300px', height: '1000px'}}> dsd</div>
            <div style={{ padding: '30px', marginLeft:'300px',marginTop:'100px', position:'fixed' , left:'0', top:'0' }}>
                <NotificationApp  data={notificationArr} />
            </div>
            <div style={{ width: '300px', height: '1000px'}}> dsd</div>
        </div>

    ))