import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Calendar22 from '../';


const events = [
    {
        id: 0,
        title: 'All Day Event very long title',
        allDay: true,
        start: new Date(2018, 0, 1),
        end: new Date(2018, 0, 1),
    },
    {
        id: 6,
        title: 'Meeting',
        start: new Date(2018, 0, 12, 10, 30, 0, 0),
        end: new Date(2018, 0, 12, 12, 30, 0, 0),
        desc: 'Pre-meeting meeting, to prepare for the meeting',
    },
    {
        id: 7,
        title: 'Lunch',
        start: new Date(2018, 0, 11, 12, 0, 0, 0),
        end: new Date(2018, 0, 11, 13, 0, 0, 0),
        desc: 'Power lunch',
    },
    {
        id: 8,
        title: 'Meeting',
        start: new Date(2018, 0, 12, 14, 0, 0, 0),
        end: new Date(2018, 0, 12, 15, 0, 0, 0),
    },
    {
        id: 9,
        title: 'Happy Hour',
        start: new Date(2018, 0, 12, 17, 0, 0, 0),
        end: new Date(2018, 0, 12, 17, 30, 0, 0),
        desc: 'Most important meal of the day',
    },
    {
        id: 10,
        title: 'Dinner',
        start: new Date(2018, 0, 12, 20, 0, 0, 0),
        end: new Date(2018, 0, 12, 21, 0, 0, 0),
    },
    {
        id: 11,
        title: 'Birthday Party',
        start: new Date(2018, 0, 13, 7, 0, 0),
        end: new Date(2018, 0, 13, 10, 30, 0),
    },
    {
        id: 12,
        title: 'Birthday Party',
        start: new Date(2018, 0, 24, 7, 0, 0),
        end: new Date(2018, 0, 24, 10, 30, 0),
    },
    {
        id: 13,
        title: 'Birthday Party',
        start: new Date(2018, 0, 23, 7, 0, 0),
        end: new Date(2018, 0, 23, 10, 30, 0),
    },
    {
        id: 14,
        title: 'Birthday Party',
        start: new Date(2018, 0, 25, 7, 0, 0),
        end: new Date(2018, 0, 25, 10, 30, 0),
    },
];

storiesOf('Calendar22', module)
    .add('default', () => (
        <div>
            <Calendar22 receptionNum={23}
                        selectable


                        onSelectEvent={action('Receive 1 obj')}
                        onSelectSlot={slotInfo =>
                            alert(
                                `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
                                `\nend: ${slotInfo.end.toLocaleString()}` +
                                `\naction: ${slotInfo.action}`
                            )
                        }

                        defaultView="week"

                        step = {5}
                        events={events}
                        defaultDate={new Date(2018, 0, 22)}
            />
        </div>
    ));