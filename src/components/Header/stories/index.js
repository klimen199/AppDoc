import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Header from '../';

import {notificationArr} from './mock-data'

storiesOf('Header', module)
    .add('Header', () => (
        <div>
            <Header 
                content="15.09.2017"
            />
        </div>
    ))