import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import PopoverApp from '../';
import Icon from '../../Icon';
import Link from '../../Links'
import Button from '../../Button'

import {dataArr} from './mock-data'

storiesOf('Popover', module)
    .add('Popover', () => (
        <div style={{ padding: '30px' }}>
            <PopoverApp  data={dataArr}/>
        </div>
    ))