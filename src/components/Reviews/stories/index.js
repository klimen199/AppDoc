import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Reviews from '../';

import {dataArr} from './mock-data'

storiesOf('Reviews', module)
    .add('Reviews', () => (
        <div>
            <Reviews data={dataArr}/>
        </div>
    ))