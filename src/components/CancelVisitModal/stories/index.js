import React from 'react';
import { storiesOf } from '@storybook/react';
import CancelVisitModal from '../';

storiesOf('Modal - CancelVisitModal', module)
    .add('modal', () => (
        <div>
            <CancelVisitModal visible={true} userName='Петров-Иванов Александр Константинович'/>
        </div>
    ));