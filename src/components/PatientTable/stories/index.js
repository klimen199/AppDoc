import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import PatientTable from '../';

import {patientArr} from './mock-data'

storiesOf('PatientTable', module)
    .add('PatientTable', () => (
        <div>
            <PatientTable data={patientArr} 
                        onAdd={() => console.log('ererre')}
                        onSearch={(a) => console.log(a)}
                        onNewMessage={(obj) => console.log('e ',obj)}
                        onNewVisit={(obj) => console.log('e ',obj)}
                        onDelete={(obj) => console.log('e ',obj)}/>
        </div>
    ))