import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TreatmentTable from '../';

storiesOf('TreatmentTable', module)
    .add('TreatmentTable', () => (
        <div>
            <TreatmentTable/>
        </div>
    ))