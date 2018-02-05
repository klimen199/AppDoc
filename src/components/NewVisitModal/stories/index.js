import React from 'react';
import { storiesOf } from '@storybook/react';
import NewVisitModal from '../';

storiesOf('Modal - NewVisitModal', module)
    .add('modal', () => (
        <div>
            <NewVisitModal visible={true} 
            	userName='Петров-Иванов Александр Константинович'
            	date='26 ноября'
            	time='08:10'
            />
        </div>
    ));