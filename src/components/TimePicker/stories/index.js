import React from 'react';
import { storiesOf } from '@storybook/react';
import moment from 'moment';
import { action } from '@storybook/addon-actions';

import TimePicker from '../';

const timeFormat = 'HH:mm';
const rangeSet = {
    placeholderStart: 'Начало',
    //defaultEndValue: moment('12.12.2017', timeFormat),
};

storiesOf('TimePicker', module)
    .add('single', () => (
        <div>
            <br/>
            <TimePicker/>
        </div>
    ))
    .add('range', () => (
        <div>
            <TimePicker range rangeSet={rangeSet} delimiter="&mdash;"/>
        </div>
    ));