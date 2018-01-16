import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Review from '../';

import {data1, data2, data3} from './mock-data'

storiesOf('Review', module)
    .add('main', () => (
        <div>
            <Review {...data1} onSend={action('Send message')}/>
        </div>
    ))
    .add('secondary', () => (
        <div>
            <Review {...data2}/>
        </div>
    ))
    .add('together', () => (
        <div>
            <Review {...data3}/>
        </div>
    ));