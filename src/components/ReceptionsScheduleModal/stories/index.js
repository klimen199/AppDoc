import React from 'react';
import { storiesOf } from '@storybook/react';
import ReceptionsScheduleModal from '../';

storiesOf('Modal - ReceptionsScheduleModal', module)
    .add('modal', () => (
        <div>
            <ReceptionsScheduleModal visible={true}/>
        </div>
    ));