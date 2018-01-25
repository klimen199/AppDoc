import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TableNoHead from '../';

import {scheduleArr} from './mock-data'

storiesOf('TableNoHead', module)
    .add('TableNoHead', () => (
        <div>
            <TableNoHead data={scheduleArr}/>
        </div>
    ))