import React from 'react';
import { storiesOf } from '@storybook/react';
import ReceptionsScheduleModal from '../';
import moment from 'moment'

const options = ['1',2,3,'4']

// дата обязательно через moment(new Date(2017,11,11))

storiesOf('Modal - ReceptionsScheduleModal', module)
    .add('modal', () => (
        <div>
            <ReceptionsScheduleModal visible={true}

                                     selOptions={options}/>
        </div>
    ));