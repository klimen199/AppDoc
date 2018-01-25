import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import PatientTable from '../';

import {patientArr} from './mock-data'

storiesOf('PatientTable', module)
    .add('PatientTable', () => (
        <div>
            <PatientTable countPatient='9' data={patientArr}/>
        </div>
    ))