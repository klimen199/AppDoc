import React from 'react';
import { storiesOf } from '@storybook/react';
import NewMessageModal from '../';

storiesOf('Modal - NewMessageModal', module)
    .add('modal', () => (
        <div>
            <NewMessageModal visible={true} userName='Петров-Иванов Александр Константинович'/>
        </div>
    ));