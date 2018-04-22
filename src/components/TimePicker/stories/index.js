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
                                from:moment("01:26", "hh:mm"),
                                to:moment("13:45", "hh:mm")
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
                                from:moment("05:16", "hh:mm"),
                                to:moment("06:48", "hh:mm")
                            },
                            {
                                from:moment("10:06", "hh:mm"),
                                to:moment("12:45", "hh:mm")
                            },
                            {
                                from:moment("20:56", "hh:mm"),
                                to:moment("22:45", "hh:mm")
                            }
                        ]}/>

        </div>
    ));