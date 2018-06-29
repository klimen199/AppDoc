import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import PopoverBody from '../';

import {dataArr} from './mock-data'

storiesOf('PopoverBody', module)
    .add('PopoverBody', () => (
        <div style={{ padding: '30px' }}>
            <PopoverBody
                fio='Андреев Владислав'
                id_user="2749"
                type="voice"
            	date={dataArr.date}
            	time={dataArr.time} 
            	text={dataArr.text}
                onPhone = {action('onPhone')}
                onEmail = {action('onPhone')}
                onGoto={(id)=>console.log('click', id)}
            />

            <PopoverBody
                isUser = {true}
                events={[{
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
                },]}
            />
        </div>
    ))