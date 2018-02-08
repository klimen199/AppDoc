import React from 'react';
import { storiesOf } from '@storybook/react';
import moment from 'moment';
import { action } from '@storybook/addon-actions';

import TimePicker from '../';

const timeFormat = 'HH:mm';
const rangeSet = {
    placeholderStart: 'Начало',
    defaultStartValue: moment(new Date(2018,1,1,14,20), "YYYY-MM-DD HH:mm"),
    defaultEndValue: moment(new Date(2018,1,1,14,30), "YYYY-MM-DD HH:mm"),
};

storiesOf('TimePicker', module)
    .add('single', () => (
        <div>
            <br/>
            <TimePicker title='Интервал рабочего времени'
                        onChange={action('Time picked')}/>
        </div>
    ))
    .add('range', () => (
        <div>
            <TimePicker range
                        rangeSet={rangeSet}
                        delimiter="&mdash;"
                        onChange={action('Time picked')}/>
            <TimePicker range
                        delimiter="&mdash;"
                        onChange={action('Time picked')}/>
        </div>
    ));