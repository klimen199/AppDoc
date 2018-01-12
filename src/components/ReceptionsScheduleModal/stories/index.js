import React from 'react';
import { storiesOf } from '@storybook/react';
import ReceptionsScheduleModal from '../';

const options = ['1',2,3,'4']

storiesOf('Modal - ReceptionsScheduleModal', module)
    .add('modal', () => (
        <div>
            <ReceptionsScheduleModal visible={true} selOptions={options}/>
        </div>
    ));