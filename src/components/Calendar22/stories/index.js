import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import BigCalendar from '../';

const events = [
    {
        id: 6,
        title: 'Иванова Александра',
        start: new Date(2018, 0, 12, 10, 30, 0, 0),
        end: new Date(2018, 0, 12, 10, 50, 0, 0),
        desc: 'Pre-meeting meeting, to prepare for the meeting',
    },
    {
        id: 7,
        title: 'Иванова Александра',
        start: new Date(2018, 0, 11, 12, 0, 0, 0),
        end: new Date(2018, 0, 11, 12, 10, 0, 0),
        desc: 'Power lunch',
    },
    {
        id: 8,
        title: 'Иванова Александра',
        start: new Date(2018, 0, 12, 9, 0, 0, 0),
        end: new Date(2018, 0, 12, 9, 10, 0, 0),
        desc: 'Most important meal of the day',
    },
    {
        id: 9,
        title: 'Иванова Александра',
        start: new Date(2018, 0, 12, 9, 30, 0, 0),
        end: new Date(2018, 0, 12, 9, 35, 0, 0),
        desc: 'Most important meal of the day',
    },
    {
        id: 10,
        title: 'Иванова Александра',
        start: new Date(2018, 0, 12, 10, 0, 0, 0),
        end: new Date(2018, 0, 12, 10, 5, 0, 0),
        desc: 'Most important meal of the day',
    },
    {
        id: 11,
        title: 'Иванова-Петрова Александра',
        start: new Date(2018, 0, 13, 9, 0, 0),
        end: new Date(2018, 0, 13, 9, 5, 0),
        desc: 'Most important meal of the day',
    },
    {
        id: 12,
        title: 'Иванова Александра',
        start: new Date(2018, 0, 24, 8, 0, 0),
        end: new Date(2018, 0, 24, 8, 10, 0),
        desc: 'Most important meal of the day',
    },
    {
        id: 13,
        title: 'Иванова Александра',
        start: new Date(2018, 0, 23, 8, 10, 0),
        end: new Date(2018, 0, 23, 8, 15, 0),
        desc: 'Most important meal of the day',
    },
    {
        id: 14,
        title: 'Петров Виталий',
        start: new Date(2018, 0, 25, 8, 40, 0),
        end: new Date(2018, 0, 25, 8, 50, 0),
        desc: 'Most important meal of the day',
    },
];

const schedules = [
    {
        id: 12,
        isEditable: false,
        time: [{
            start: new Date(2018, 0, 15, 8, 30, 0),
            end: new Date(2018, 0, 15, 10, 0, 0),
        },{
            start: new Date(2018, 0, 15, 12, 0, 0),
            end: new Date(2018, 0, 15, 13, 30, 0),
        },{
            start: new Date(2018, 0, 15, 18, 0, 0),
            end: new Date(2018, 0, 15, 19, 0, 0),
        }],
        emergencyTime: [],
    },
    {
        id: 12,
        isEditable: false,
        time: [{
            start: new Date(2018, 0, 25, 8, 30, 0),
            end: new Date(2018, 0, 25, 10, 0, 0),
        },{
            start: new Date(2018, 0, 25, 12, 0, 0),
            end: new Date(2018, 0, 25, 13, 30, 0),
        },{
            start: new Date(2018, 0, 25, 18, 0, 0),
            end: new Date(2018, 0, 25, 19, 0, 0),
        }],
        emergencyTime: [],
    },
    {
        id: 13,
        isEditable: true,
        time: [{
            start: new Date(2018, 1, 8, 8, 30, 0),
            end: new Date(2018, 1, 8, 9, 30, 0),
        },{
            start: new Date(2018, 1, 8, 13, 0, 0),
            end: new Date(2018, 1, 8, 18, 30, 0),
        }],
        emergencyTime: [{
            start: new Date(2018, 1, 8, 14, 30, 0),
            end: new Date(2018, 1, 8, 15, 0, 0),
        },{
            start: new Date(2018, 1, 8, 17, 0, 0),
            end: new Date(2018, 1, 8, 17, 30, 0),
        }],
    },
    {
        id: 15,
        isEditable: false,
        time: [{
            start: new Date(2018, 1, 7, 8, 30, 0),
            end: new Date(2018, 1, 7, 9, 30, 0),
        },{
            start: new Date(2018, 1, 7, 13, 0, 0),
            end: new Date(2018, 1, 7, 18, 30, 0),
        }],
        emergencyTime: [{
            start: new Date(2018, 1, 7, 17, 0, 0),
            end: new Date(2018, 1, 7, 17, 30, 0),
        }],
    },
];

storiesOf('Calendar22', module)
    .add('default', () => (
        <div style={{backgroundColor: '#cccbcb', padding: 20}}>
            <BigCalendar receptionNum={23}
                         selectable

                         onSelectEvent={action('Receive 1 obj')}
                         onSelectSlot={action('Slot info')}

                         step = {5}
                         events={events}
                         defaultDate={new Date(2018, 0, 22)}
                         onPopoverClose={action('onPopoverClose')}
                         onPopoverEmail={action('onPopoverEmail')}
            />
        </div>
    ))
    .add('editor', () => (
        <div style={{backgroundColor: '#cccbcb', padding: 20}}>
            <BigCalendar receptionNum={23}
                         selectable
                         editor

                         onMonthSelect={(date,schedule) => {
                             if(date.length !== 0) console.log(date, schedule)
                         }}
                         schedules={schedules}
            />
        </div>
    ));