import React from 'react';
import { storiesOf } from '@storybook/react';
import moment from 'moment';
import { action } from '@storybook/addon-actions';

import DatePicker from '../';

const dateFormat = 'DD.MM.YYYY';
const rangeSet = {
    placeholderStart: 'Начало',
    //defaultEndValue: moment('12.12.2017', dateFormat),
};

storiesOf('DatePicker', module)
    .add('default', () => (
        <div>
            Single: <DatePicker/>
            <br/>
            Time: <DatePicker time/>
            <br/>
            Range: <DatePicker range rangeSet={rangeSet} delimiter="&mdash;"/>
        </div>
    ));