import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import PopoverApp from '../';

import {dataArr} from './mock-data'

const userArr = [
    {
        id: 6,
        fio: 'Иванова Александра',
        doctorType: "терапевт",
        start: new Date(2018, 5, 12, 10, 30, 0, 0).getTime()/1000,
        end: new Date(2018, 5, 12, 10, 50, 0, 0).getTime()/1000,
        type: 'video',
        comment: 'Pre-meeting meeting, to prepare for the meeting',
    },
    {
        id: 7,
        fio: 'Иванова Александра',
        doctorType: "терапевт какой-то там",
        start: new Date(2018, 5, 12, 11, 30, 0, 0).getTime()/1000,
        end: new Date(2018, 5, 12, 11, 50, 0, 0).getTime()/1000,
        type: 'voice',
        comment: 'Pre-meeting meeting, to prepare for the meeting',
    },
    {
        id: 7,
        fio: 'Иванова А Ф',
        doctorType: "терапевт",
        start: new Date(2018, 5, 12, 11, 50, 0, 0).getTime()/1000,
        end: new Date(2018, 5, 12, 11, 55, 0, 0).getTime()/1000,
        type: 'voice',
        comment: 'Pre-meeting meeting, to prepare for the meeting',
    },
]

storiesOf('PopoverApp', module)
    .add('Popover', () => (
        <div style={{ padding: '30px' }}>
            <PopoverApp  data={dataArr} onClose={() => console.log('onClose')}>
                <div style={{width:100, height: 100, backgroundColor: 'yellow'}}
                     onClick={() => dataArr}>
                    smth
                </div>
            </PopoverApp>
        </div>
    ))
    .add('Popover user', () => (
        <div style={{ padding: '30px' }}>
            <PopoverApp  events={userArr} isUser={true}>
                <div style={{width:100, height: 100, backgroundColor: 'yellow'}}
                     onClick={() => {}}>
                    smth
                </div>
            </PopoverApp>
        </div>
    ))