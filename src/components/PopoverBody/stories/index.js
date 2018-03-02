import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import PopoverBody from '../';

import {dataArr} from './mock-data'

storiesOf('PopoverBody', module)
    .add('PopoverBody', () => (
        <div style={{ padding: '30px' }}>
            <PopoverBody
            	name={dataArr.name}
            	date={dataArr.date}
            	time={dataArr.time} 
            	text={dataArr.text}
                onPhone = {action('onPhone')}
                onEmail = {action('onPhone')}
            />
        </div>
    ))