import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import DatePicker from '../';

storiesOf('DatePicker', module)
    .add('default', () => (
        <div>
            <DatePicker/>
        </div>
    ));