import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import BigCalendar from '../';

const events = [
    {
        id: 6,
        fio: 'Иванова Александра',
        start: new Date(2018, 0, 12, 10, 30, 0, 0),
        end: new Date(2018, 0, 12, 10, 50, 0, 0),
        comment: 'Pre-meeting meeting, to prepare for the meeting',
    },
    {
        id: 7,
        fio: 'Иванова Александра',
        start: new Date(2018, 0, 11, 12, 0, 0, 0),
        end: new Date(2018, 0, 11, 12, 10, 0, 0),
        comment: 'Power lunch',
    },
    {
        id: 8,
        fio: 'Иванова Александра',
        start: new Date(2018, 0, 12, 9, 0, 0, 0),
        end: new Date(2018, 0, 12, 9, 10, 0, 0),
        comment: 'Most important meal of the day',
    },
    {
        id: 9,
        fio: 'Иванова Александра',
        start: new Date(2018, 0, 12, 9, 30, 0, 0),
        end: new Date(2018, 0, 12, 9, 35, 0, 0),
        comment: 'Most important meal of the day',
    },
    {
        id: 10,
        fio: 'Иванова Александра',
        start: new Date(2018, 0, 12, 10, 0, 0, 0),
        end: new Date(2018, 0, 12, 10, 5, 0, 0),
        comment: 'Most important meal of the day',
    },
    {
        id: 11,
        fio: 'Иванова-Петрова Александра',
        start: new Date(2018, 0, 13, 9, 0, 0),
        end: new Date(2018, 0, 13, 9, 5, 0),
        comment: 'Most important meal of the day',
    },
    {
        id: 12,
        fio: 'Иванова Александра',
        start: new Date(2018, 0, 24, 8, 0, 0),
        end: new Date(2018, 0, 24, 8, 10, 0),
        comment: 'Most important meal of the day',
    },
    {
        id: 13,
        fio: 'Иванова Александра',
        start: new Date(2018, 0, 23, 8, 10, 0),
        end: new Date(2018, 0, 23, 8, 15, 0),
        comment: 'Most important meal of the day',
    },
    {
        id: 14,
        fio: 'Петров Виталий',
        start: new Date(2018, 0, 25, 8, 40, 0),
        end: new Date(2018, 0, 25, 8, 50, 0),
        comment: 'Most important meal of the day',
    },
];

const schedules = [
    {
        id: 12,
        isEditable: false,
        intervalOb: [{
            start: new Date(2018, 0, 15, 8, 30, 0),
            end: new Date(2018, 0, 15, 10, 0, 0),
        },{
            start: new Date(2018, 0, 15, 12, 0, 0),
            end: new Date(2018, 0, 15, 13, 30, 0),
        },{
            start: new Date(2018, 0, 15, 18, 0, 0),
            end: new Date(2018, 0, 15, 19, 0, 0),
        }],
        intervalEx: [],
    },
    {
        id: 12,
        isEditable: false,
        intervalOb: [{
            start: new Date(2018, 0, 25, 8, 30, 0),
            end: new Date(2018, 0, 25, 10, 0, 0),
        },{
            start: new Date(2018, 0, 25, 12, 0, 0),
            end: new Date(2018, 0, 25, 13, 30, 0),
        },{
            start: new Date(2018, 0, 25, 18, 0, 0),
            end: new Date(2018, 0, 25, 19, 0, 0),
        }],
        intervalEx: [],
    },
    {
        id: 13,
        isEditable: true,
        intervalOb: [{
            start: new Date(2018, 1, 8, 8, 30, 0),
            end: new Date(2018, 1, 8, 9, 30, 0),
        },{
            start: new Date(2018, 1, 8, 13, 0, 0),
            end: new Date(2018, 1, 8, 18, 30, 0),
        }],
        intervalEx: [{
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
        intervalOb: [{
            start: new Date(2018, 1, 7, 8, 30, 0),
            end: new Date(2018, 1, 7, 9, 30, 0),
        },{
            start: new Date(2018, 1, 7, 13, 0, 0),
            end: new Date(2018, 1, 7, 18, 30, 0),
        }],
        intervalEx: [{
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
                         onPopoverPhone={() => alert(111)}
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