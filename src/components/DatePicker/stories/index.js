import React from 'react';
import { storiesOf } from '@storybook/react';
import moment from 'moment';
import { action } from '@storybook/addon-actions';

import DatePicker from '../';

storiesOf('DatePicker', module)
    .add('default', () => (
        <div>
            Single: <DatePicker/>
            <br/>
            Time: <DatePicker time/>
            <br/>
            Range: <DatePicker range/>
        </div>
    ));