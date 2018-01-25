import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import BigCalendar from '../';


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
        start: new Date(2018, 0, 12, 9, 0, 0, 0),
        end: new Date(2018, 0, 12, 9, 10, 0, 0),
    },
    {
        id: 9,
        title: 'Happy Hour',
        start: new Date(2018, 0, 12, 9, 30, 0, 0),
        end: new Date(2018, 0, 12, 9, 35, 0, 0),
        desc: 'Most important meal of the day',
    },
    {
        id: 10,
        title: 'Dinner',
        start: new Date(2018, 0, 12, 10, 0, 0, 0),
        end: new Date(2018, 0, 12, 10, 5, 0, 0),
    },
    {
        id: 11,
        title: 'Birthday Party',
        start: new Date(2018, 0, 13, 9, 0, 0),
        end: new Date(2018, 0, 13, 9, 5, 0),
    },
    {
        id: 12,
        title: 'Birthday Party',
        start: new Date(2018, 0, 24, 8, 0, 0),
        end: new Date(2018, 0, 24, 8, 10, 0),
    },
    {
        id: 13,
        title: 'Birthday Party',
        start: new Date(2018, 0, 23, 8, 10, 0),
        end: new Date(2018, 0, 23, 8, 15, 0),
    },
    {
        id: 14,
        title: 'Birthday Party',
        start: new Date(2018, 0, 25, 8, 45, 0),
        end: new Date(2018, 0, 25, 8, 50, 0),
    },
];

storiesOf('Calendar22', module)
    .add('default', () => (
        <div>
            <BigCalendar receptionNum={23}
                        selectable


                        onSelectEvent={action('Receive 1 obj')}
                        onSelectSlot={action('Slot info')}

                        defaultView="week"

                        step = {5}
                        events={events}
                        defaultDate={new Date(2018, 0, 22)}
            />
        </div>
    ));