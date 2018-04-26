import React from 'react';
import { storiesOf } from '@storybook/react';
import moment from 'moment';
import { action } from '@storybook/addon-actions';

import TimePicker from '../';

const rangeSet = {
    placeholderStart: 'Начало',
    placeholderEnd: 'Конец',
    defaultStartValue: moment("01:26", "hh:mm"), /*задать в доступный промежуток времени(желательно)*/
    defaultEndValue: moment("15:26", "hh:mm"), /*задать в доступный промежуток времени*/
};
const valueTime = moment("13:45", "hh:mm");

storiesOf('TimePicker', module)
    .add('single', () => (
        <div>
            <br/>
            <TimePicker format="HH:mm"
                        onChange={action('Time picked')}
                        minuteStep={5}
                        availableArea={[
                            {
                                from : 1396009227,
                                to   : 1396020327
                            },
                            {
                                from : 1396030327,
                                to   : 1396037327
                            }
                        ]}
                        placeholder= "Время деньги"
                        value = {valueTime} //если убрать, то будет placeholder
            />
        </div>
    ))
    .add('range', () => (
        <div>
            <TimePicker format="HH:mm"
                        minuteStep={5}
                        value = {valueTime}

                        range
                        rangeSet={rangeSet}
                        delimiter="&mdash;"
                        onChange={action('Time picked')}
                        availableArea={[
                            {
                                from : 1395985227,
                                to   : 1395990227
                            },
                            {
                                from : 1396005227,
                                to   : 1396010327
                            },
                            {
                                from : 1396020027,
                                to   : 1396025327
                            }
                        ]}/>

        </div>
    ));