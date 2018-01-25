import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import PopoverBody from '../';

import {dataArr} from './mock-data'

storiesOf('PopoverBody', module)
    .add('PopoverBody', () => (
        <div style={{ padding: '30px' }}>
            <PopoverBody
            	name='Иванова Александра'
            	date='23 ноября'
            	time='08:15 - 08:20'
            	text='Консультация по результатам анализа крови.'
            />
        </div>
    ))